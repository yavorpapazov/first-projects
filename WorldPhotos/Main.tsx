import React from 'react'

interface Props {
    mainImage: string;
    children: React.ReactNode;
}
function Main({mainImage, children}: Props) {
	return (
		<header className={mainImage}>{children}</header>
	)
}
export default Main