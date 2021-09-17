import React from 'react'
import Main from './Main'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import TopPhotos from './TopPhotos'

function Home() {
	return (
		<div>
			<Main mainImage={"defaultImage"}>
				<Banner title={"Welcome to My Photos page"} subtitle={"Pictures from all over the world"}>
					<Link className="btn" to="/photos">My Photos</Link>
				</Banner>
			</Main>
			<TopPhotos />
		</div>
	)
}
export default Home