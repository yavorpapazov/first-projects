import React from 'react'
import {Link} from 'react-router-dom'

function FavoriteMoments() {
	return (
		<div className="container-3">
			<Link className="return-home" to="/">Return Home</Link>
	 		<div className="image-div-3">
	        	<img src="./images/hiking1.jpg" alt="" />
	        </div>
	        <h3>Climbing Mt Rainier</h3>
	        <div className="image-div-3">
	        	<img src="./images/ironman.jpg" alt="" />
	        </div>
	        <h3>Completing my first Ironman 70.3 race</h3>
		</div>
	)
}
export default FavoriteMoments