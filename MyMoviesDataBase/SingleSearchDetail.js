import React, {useContext, useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {myContext} from './Context'

function SingleSearchDetail() {
	let {movieId} = useParams()
	let data = useContext(myContext)
	let result = data.getOneSearch(movieId)
	let [oneTrailer, setOneTrailer] = useState({})
	//A function to fetch data for the movie trailer:
	async function getOneTrailer(movieId) {
		let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=66948c269eebd46447b46fb977e5def4&language=en-US`
		let response = await fetch(url)
		let responseData = await response.json()
		let myTrailer = responseData.results.find(item => item.type === "Trailer")
		setOneTrailer(myTrailer)
	}
	useEffect(() => {
		getOneTrailer(movieId)
	}, [])
	//Render movie title, image, overview and trailer:
	if(!result) {
		return (
			<h1>Loading...</h1>
		)
	} else if(!oneTrailer) {
		return (
			<div className="mainDiv">
				<Link className="returnHome" to="/">Return Home</Link>
				<h1>Movie Details</h1>
				<div className="divContainer">
					<section className="divItem">
						<h3>{result.title}</h3>
						<img className="movieImg" src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt='' />
						<h3>Overview</h3>
						<p>{result.overview}</p>
					</section>
				 	<section className="divItem">
						<h3>Trailer Not Available</h3>
					</section>
				</div>
			</div>
		)
	} else {
		return (
			<div className="mainDiv">
				<Link className="returnHome" to="/">Return Home</Link>
				<h1>Movie Details</h1>
				<div className="divContainer">
					<section className="divItem">
						<h3>{result.title}</h3>
						<img className="movieImg" src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt='' />
						<h3>Overview</h3>
						<p>{result.overview}</p>
					</section>
					<section className="divItem">
						<h3>Movie Trailer</h3>
						<iframe width="560" height="315" 
							src={`https://www.youtube.com/embed/${oneTrailer.key}`} 
							title={`${oneTrailer.name}`} frameBorder="0" allow="accelerometer; 
							autoplay; clipboard-write; encrypted-media; gyroscope; 
							picture-in-picture" allowFullScreen>
						</iframe>
					</section>
				</div>
			</div>
		)
	}
}
export default SingleSearchDetail