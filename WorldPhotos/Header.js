import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
	return (
		<div className="navArea">
			<Link className="link" to="/">
				<h2 className="h2Header">Home</h2>
			</Link>
			<Link className="link" to="/photos">
				<div className="divHeader"><i className="ri-camera-line"></i></div>
			</Link>
		</div>
	)
}
export default Header