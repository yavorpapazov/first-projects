import React, {useContext} from 'react'
import {myContext} from './Context'
import SingleFamily from './SingleFamily'
import Carousel from 'react-elastic-carousel'

let breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 400, itemsToShow: 2},
	{width: 800, itemsToShow: 3},
	{width: 1200, itemsToShow: 5}
]
function PopularFamily() {
	let data = useContext(myContext)
	let result = data.allFamily.map(item => <SingleFamily key={item.id} id={item.id} title={item.title} image={item.poster_path} />)
	return (
		<section>
			<h1>Family</h1>
			<div>
				<Carousel breakPoints={breakPoints}>
					{result}
				</Carousel>
			</div>
		</section>
	)
}
export default PopularFamily