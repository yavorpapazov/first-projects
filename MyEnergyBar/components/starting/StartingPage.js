import classes from './StartingPage.module.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../store/app-context'

function StartingPage() {
  let appContextData = useContext(AppContext)
  useEffect(() => {
		appContextData.getEnergyBar()
	}, [])
  return (
    <section className={classes.starting}>
      {!appContextData.isLoggedIn ? <h1>Please log in to build your energy bar</h1> : (
        <div>
          <h1>This is your Energy Bar App</h1>
          <h1>Please go to Ingredients to build your energy bar</h1>
        </div>
      )}
    </section>
  )
}
export default StartingPage