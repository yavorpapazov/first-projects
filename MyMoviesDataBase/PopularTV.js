import React, {useContext} from 'react'
import {myContext} from './Context'
import SingleTV from './SingleTV'
import Carousel from 'react-elastic-carousel'

let breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 400, itemsToShow: 2},
	{width: 800, itemsToShow: 3},
	{width: 1200, itemsToShow: 5}
]
function PopularTV() {
	let data = useContext(myContext)
	let result = data.allTV.map(item => <SingleTV key={item.id} id={item.id} title={item.name} image={item.poster_path} />)
	return (
		<section>
			<h1>Popular TV Series</h1>
			<Carousel breakPoints={breakPoints}>
				{result}
			</Carousel>
		</section>
	)
}
export default PopularTV