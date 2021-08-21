import React, {useContext} from 'react'
import BarItem from './BarItem'
import myContext from './Context'

function MyEnergyBar() {
	let data = useContext(myContext)
	let result = data.energyBar.map(item => <BarItem key={item.id} {...item} />)
	return (
		<div>
			<h1>My Energy Bar</h1>
			<div className="gridDiv">
				{result}
			</div>
			<div className="h4Div">
				<h4>Total carbs: {Math.round(data.sumCarbs() / 3)} g</h4>
				<h4>Total fat: {Math.round(data.sumFat() / 3)} g</h4>
				<h4>Total fiber: {Math.round(data.sumFiber() / 3)} g</h4>
				<h4>Total kcal: {Math.round(data.sumKcal() / 3)} kcal</h4>
				<h4>Total protein: {Math.round(data.sumProtein() / 3)} g</h4>
				<h4>Total sugars: {Math.round(data.sumSugars() / 3)} g</h4>
			</div>
		</div>
	)
}
export default MyEnergyBar