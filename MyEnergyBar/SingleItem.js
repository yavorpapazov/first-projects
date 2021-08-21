import React, {useState, useContext} from 'react'
import myContext from './Context'

function SingleItem({item}) {
	let [isHovered, setIsHovered] = useState(false)
	let [isHoveredCircle, setIsHoveredCircle] = useState(false)
	let data = useContext(myContext)
	function handleEnter() {
		setIsHovered(true)
	}
	function handleLeave() {
		setIsHovered(false)
	}
	function handleEnterCircle() {
		setIsHoveredCircle(true)
	}
	function handleLeaveCircle() {
		setIsHoveredCircle(false)
	}
	return (
		<div className="singleItemDiv" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
			<div className="circleIcon">
				{data.energyBar.some(element => element.id === item.id) ? 
				<i 
					className="ri-thumb-up-fill"></i> : 
					isHovered && <i className={isHoveredCircle ? "ri-add-circle-fill" : "ri-add-circle-line"} 
					onMouseEnter={handleEnterCircle} 
					onMouseLeave={handleLeaveCircle} 
					onClick={() => data.handleAdd(item)}
				></i>}
			</div>
			<h3>{item.item}</h3>
		</div>
	)
}
export default SingleItem