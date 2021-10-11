import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
	return (
		<div>
			<Link to="/">Return Home</Link>
			<h1>Page Not Found</h1>
		</div>
	)
}
export default Error