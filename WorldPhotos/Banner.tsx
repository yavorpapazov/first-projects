import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}
function Banner({title, subtitle, children}: Props) {
	return (
		<div className="banner">
			<h2>{title}</h2>
			<p>{subtitle}</p>
			<div>
				{children}
			</div>
		</div>
	)
}
export default Banner