import React, {useContext} from 'react'
import {myContext} from './Context'
import MyPhotos from './MyPhotos'

function TopPhotos() {
	let data = useContext(myContext)
	let result = data.allPhotos.filter(item => item.top === true).map(item => <MyPhotos key={item.id} element={item} />)
	return (
		<div>
			<h1 className="topPhotosH1">Best Photos</h1>
			<div className="topPhotos">	
				{result}
			</div>
		</div>
	)
}
export default TopPhotos