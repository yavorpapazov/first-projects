import React from 'react'
import {Link} from 'react-router-dom'

function SingleSearch({id, title, image}) {
	return (
		<div className="divTitle">
			<h3>{title}</h3>
			<Link to={`/search/${id}`}>
				<img className="movieImg" src={`https://image.tmdb.org/t/p/w500${image}`} alt='' />
			</Link>
		</div>
	)
}
export default SingleSearch