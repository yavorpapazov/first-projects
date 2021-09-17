import React, {useState, useContext} from 'react'
import {useParams, Link} from 'react-router-dom'
import {myContext} from './Context'

function SinglePhoto() {
	let {photoId} = useParams()
	let data = useContext(myContext)
	let result = data.getPhoto(photoId)
	let [isHovered, setIsHovered] = useState(false)
	function handleEnter() {
		setIsHovered(true)
	}
	function handleLeave() {
		setIsHovered(false)
	}
	return (
		<section>
			<h1>{result.name}</h1>
			<div className="singlePhotoImage">
				<div className="singlePhotoLinkContainer" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
					<img src={result.img} alt='' />
					{isHovered && <Link className="singlePhotoLink" to="/photos">Back to My Photos</Link>}
				</div>
			</div>
		</section>
	)
}
export default SinglePhoto