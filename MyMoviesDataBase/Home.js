import React from 'react'
import PopularMovies from './PopularMovies'
import PopularTV from './PopularTV'
import PopularFamily from './PopularFamily'
import PopularDocumentary from './PopularDocumentary'

function Home() {
	return (
		<div>
			<h1 className="h1Header">All Movies</h1>
			<PopularMovies />
			<PopularTV />
			<PopularFamily />
			<PopularDocumentary />
		</div>
	)
}
export default Home