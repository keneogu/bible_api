import React, { useCallback, useState } from 'react'
import { useGetBible } from './customHooks/useGetBible'

const Header = () => {

	const { filterState, filterDispatch } =	useGetBible();
	console.log(filterState.searchQuery)
	const [input, setInput] = useState("" || filterState.searchQuery)

	console.log(input)

	const onSubmit = useCallback((e) => {
		e.preventDefault();
		filterDispatch({
			type: "search",
			payload: input
		})
		setInput("");
	}, [filterDispatch, input])

	return (
		<div>
			<div>
				<h3>Bible</h3>
			</div>
			<form onSubmit={onSubmit}>
				<input type="text" value={input} name='searchQuery' placeholder='search...' onChange={(e) => setInput(e.target.value)} />
				<button type='submit'>search</button>
			</form>

				<select name="category" id="" onChange={(e) => {filterDispatch({ type: "category", payload: e.target.value})}}>
					<option value="web">web</option>
					<option value="kjv">kjv</option>
					<option value="webbe">eng-uk</option>
					<option value="oeb-us">eng-us</option>
					<option value="almeida">Portuguese</option>
				</select>

		</div>
	)
}

export default Header