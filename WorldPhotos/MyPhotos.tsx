import React, {useState} from 'react'
import {Link} from 'react-router-dom'

interface Props {
    id: string;
	name: string;
	theme: string;
	img: string;
	top: boolean;
}
function MyPhotos({id, img}: Props) {
    let [isHovered, setIsHovered] = useState(false)
    function handleEnter() {
		setIsHovered(true)
	}
	function handleLeave() {
		setIsHovered(false)
	}
    return (
        <div className="photos-link-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <img src={img} alt='' />
            {isHovered && <Link className="photos-link" to={`/photos/${id}`}>Photo Info</Link>}
        </div>
    )
}
export default MyPhotos