import React from 'react'

function Education(props) {
	let {title, dates, description, school, city} = props
	let myDescription = description.map((item, index) => <li key={index}>{item}</li>)
	return (
		<div>
			<h3>{title}</h3>
			<h4>{school}</h4>
			<h4>{dates}</h4>
			<h5>{city}</h5>
			<ul>{myDescription}</ul>
		</div>
	)	
}
export default Education