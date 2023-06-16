import React from 'react';
import { BibleState } from './reducer/Context';
import Header from './Header';

const Home = () => {
	const { data } = BibleState();

	console.log(data);
	return (
		<div>
			<Header />
			<div>
				{data?.verses.map((bible) => (
					<div>
						<span>{bible.book_name} </span>
						<span>{bible.chapter} : </span>
						<span>{bible.verse}:-</span>
						<p>{bible.text}</p>
					</div>
					
				))}
			</div>
		</div>
	)
}

export default Home