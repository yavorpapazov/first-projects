import React, {useContext} from 'react'
import SingleItem from './SingleItem'
import myContext from './Context'

function Ingredients() {
	let data = useContext(myContext)
	let result = data.myIngredients.map(item => <SingleItem key={item.id} item={item} />)
	return (
		<div> 
			<h1>Pick ingredients</h1>
			<div className="gridDiv">
				{result}
			</div>
		</div>
	)
}
export default Ingredients