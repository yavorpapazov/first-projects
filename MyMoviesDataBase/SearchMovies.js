import React, {useContext} from 'react'
import {myContext} from './Context'
import SingleSearch from './SingleSearch'
import Carousel from 'react-elastic-carousel'

let breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 400, itemsToShow: 2},
	{width: 800, itemsToShow: 3},
	{width: 1200, itemsToShow: 5}
]
function SearchMovies() {
	let data = useContext(myContext)
	let result = data.allSearchItems.map(item => <SingleSearch key={item.id} id={item.id} title={item.title} image={item.poster_path} />)
	let myCarousel = (
		<section>
			<h1>Search Items</h1>
			<Carousel breakPoints={breakPoints}>
				{result}
			</Carousel>
		</section>
	)
	return (
		<div>
			<form className="searchForm" onSubmit={data.handleSubmit}>
				<label htmlFor="movieItems">
					<h3>Search movies...</h3>
				</label>
				<input className="formInput" type="text" id="movieItems" value={data.movieItem} onChange={(e) => data.setMovieItem(e.target.value)}/>
				<button className="submitBtn" disabled={data.movieItem ? false : true} type="submit">Search</button>
				<br />
			</form>
			<button className="clearBtn" disabled={data.allSearchItems.length === 0 ? true : false} onClick={() => data.setAllSearchItems([])}>Clear Search</button>
			{data.allSearchItems.length !== 0 && myCarousel}
		</div>
	)
}
export default SearchMovies