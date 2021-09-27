import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
	return (
		<div className="mainDiv">
			<Link className="returnHome" to="/">Return Home</Link>
			<h1>Page Not Found</h1>
		</div>
	)
}
export default Error