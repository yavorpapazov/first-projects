import React from 'react'
import {Link} from 'react-router-dom'

function SingleFamily({id, title, image}) {
	return (
		<div>
			<h3>{title}</h3>
			<Link to={`/family/${id}`}>
				<img className="movieImg" src={`https://image.tmdb.org/t/p/w500${image}`} alt='' />
			</Link>
		</div>
	)
}
export default SingleFamily