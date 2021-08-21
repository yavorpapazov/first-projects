import React, {useState, useContext} from 'react'
import myContext from './Context'

function BarItem({carbs, fat, fiber, id, item, kcal, protein, sugars}) {
	let [isHoveredBin, setIsHoveredBin] = useState(false)
	let data = useContext(myContext)
	function handleEnterBin() {
		setIsHoveredBin(true)
	}
	function handleLeaveBin() {
		setIsHoveredBin(false)
	}
	return (
		<div>
			<h3>{item}</h3>
			<div className="deleteIcon">
				<h4>Remove Item</h4>
				<i 
					onMouseEnter={handleEnterBin} 
					onMouseLeave={handleLeaveBin} 
					onClick={() => data.handleRemove(id)} 
					className={isHoveredBin ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
				></i>
			</div>
		</div>
	)
}
export default BarItem