import React, {useContext} from 'react'
import Main from './Main'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import {myContext} from './Context'
import MyPhotos from './MyPhotos'
import PhotosFilter from './PhotosFilter'

function Photos() {
	let data = useContext(myContext)
	let resultAll = data.allPhotos.map(item => <MyPhotos key={item.id} element={item} />)
	let resultFilter = data.allPhotos.filter(item => item.theme === data.theme).map(item => <MyPhotos key={item.id} element={item} />)
	return (
		<div>
			<Main mainImage={"photosImage"}>
				<Banner title={"My Photos"} subtitle={"Pictures from all over the world"}>
					<Link className="btn" to="/">Return Home</Link>
				</Banner>
			</Main>
			<PhotosFilter />
			<div className="topPhotos">
				{data.theme === "all" ? resultAll : resultFilter}
			</div>
		</div>
	)
}
export default Photos