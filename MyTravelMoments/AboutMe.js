import React from 'react'
import {Link} from 'react-router-dom'

function AboutMe() {
	return (
		<div className="container-3">
			<Link className="return-home" to="/">Return Home</Link>
	 		<div className="image-div-3">
	        	<img src="./images/aboutme2.jpg" alt="" />
	        </div>
	        <h3>Go explore, experience and capture your moments</h3>
		</div>
	)
}
export default AboutMe