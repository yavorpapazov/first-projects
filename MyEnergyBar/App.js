import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Ingredients from './Ingredients'
import MyEnergyBar from './MyEnergyBar'
import useCustom from './useCustom'
import myContext from './Context'

function App() {
	let [myIngredients, handleAdd, energyBar, handleRemove, sumCarbs, sumFat, sumFiber, sumKcal, sumProtein, sumSugars] = useCustom()
	return (
		<myContext.Provider value={{myIngredients, handleAdd, energyBar, handleRemove, sumCarbs, sumFat, sumFiber, sumKcal, sumProtein, sumSugars}}>
			<Header />
			<Switch>
				<Route exact path="/">
					<Ingredients />
				</Route>
				<Route path="/myenergybar">
					<MyEnergyBar />
				</Route>
			</Switch>
		</myContext.Provider>
	)
}
export default App