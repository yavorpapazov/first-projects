import classes from './IngredientsPage.module.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../store/app-context'
import ingredientsData from '../store/ingredients-data'
import IngredientsItem from '../components/ingredients/IngredientsItem'

function IngredientsPage () {
	let appContextData = useContext(AppContext)
	useEffect(() => {
		appContextData.getEnergyBar()
	}, [])
  	let result = ingredientsData.map(element => <IngredientsItem 
		key={element.id} 
		element={element}
		{...element}
		onChangeIngredients={appContextData.addHandler}
		btn='Add'
	/>)
	return (
		<div> 
			<h3 className={classes.title}>Pick your ingredients</h3>
			<div className={classes.container}>
				{result}
			</div>
		</div>
	)
}
export default IngredientsPage