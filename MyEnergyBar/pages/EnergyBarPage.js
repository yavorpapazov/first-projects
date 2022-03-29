import classes from './IngredientsPage.module.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../store/app-context'
import IngredientsItem from '../components/ingredients/IngredientsItem'

function EnergyBarPage() {
  let appContextData = useContext(AppContext)
  useEffect(() => {
    appContextData.getEnergyBar()
  }, [])
  let result = appContextData.energyBarDB.filter(element => element.email === appContextData.userEmail).map(element => <IngredientsItem 
    key={element.id} 
    element={element} 
    {...element}
    onChangeIngredients={appContextData.removeHandler}
    btn='Rmv'
  />)
  return (
    <div>
      <h3 className={classes.title}>My Energy Bar</h3>
      <div className={classes.container}>
        {result}
      </div>
    </div> 
  )
}
export default EnergyBarPage