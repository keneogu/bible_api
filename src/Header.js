import React from 'react'

const Header = () => {
	return (
		<div>
			<div>
				<h3>Bible</h3>
			</div>
			<form>
				<input type="text" placeholder='search...' />
				<select name="" id="">
					<option value="kjv">kjv</option>
				</select>
				<button>search</button>
			</form>
		</div>
	)
}

export default Header