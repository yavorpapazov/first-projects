import React from 'react'

function Resume(props) {
	let {title, dates, duties, company, city} = props
	let myDuties = duties.map((item, index) => <li key={index}>{item}</li>)
	return (
		<div>
			<h3>{title}</h3>
			<h4>{company}</h4>
			<h4>{dates}</h4>
			<h5>{city}</h5>
			<ul>{myDuties}</ul>
		</div>
	)	
}
export default Resume