import React from 'react'

function Main({mainImage, children}) {
	return (
		<header className={mainImage}>{children}</header>
	)
}
export default Main