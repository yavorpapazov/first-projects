import React, {useContext} from 'react'
import {myContext} from './Context'
import SingleDocumentary from './SingleDocumentary'
import Carousel from 'react-elastic-carousel'

let breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 400, itemsToShow: 2},
	{width: 800, itemsToShow: 3},
	{width: 1200, itemsToShow: 5}
]
function PopularDocumentary() {
	let data = useContext(myContext)
	let result = data.allDocumentary.map(item => <SingleDocumentary key={item.id} id={item.id} title={item.title} image={item.poster_path} />)
	return (
		<section>
			<h1>Documentary</h1>
			<div>
				<Carousel breakPoints={breakPoints}>
					{result}
				</Carousel>
			</div>
		</section>
	)
}
export default PopularDocumentary