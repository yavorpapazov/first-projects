import React from 'react'
import Main from './Main'
import Banner from './Banner'
import {Link} from 'react-router-dom'

function Error() {
	return (
		<div>
			<Main mainImage={"defaultImage"}>
				<Banner title={"Error"} subtitle={"Page not found"}>
					<Link className="btn" to="/">Return Home</Link>
				</Banner>
			</Main>
		</div>
	)
}
export default Error