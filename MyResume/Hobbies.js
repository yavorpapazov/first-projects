import React from 'react'

function Hobbies(props) {
	let {img, description} = props
	return (
		<div>
			<h3 className="hobbies">{description}</h3>
			<img className="photoHobbies" src={img} alt='' />
		</div>
	)	
}
export default Hobbies