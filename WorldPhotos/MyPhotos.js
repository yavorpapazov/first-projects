import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function MyPhotos({element}) {
	let [isHovered, setIsHovered] = useState(false)
	function handleEnter() {
		setIsHovered(true)
	}
	function handleLeave() {
		setIsHovered(false)
	}
	return (
		<div className="photosLinkContainer" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
			<img src={element.img} alt='' />
			{isHovered && <Link className="photosLink" to={`/photos/${element.id}`}>Photo Info</Link>}
		</div>
	)
}
export default MyPhotos