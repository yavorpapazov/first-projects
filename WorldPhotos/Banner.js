import React from 'react'

function Banner({children, title, subtitle}) {
	return (
		<div className="banner">
			<h2>{title}</h2>
			<p>{subtitle}</p>
			{children}
		</div>
	)
}
export default Banner