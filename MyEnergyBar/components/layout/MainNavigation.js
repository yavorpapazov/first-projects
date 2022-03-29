import { useContext } from 'react'
import { AppContext } from '../../store/app-context'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  let appContextData = useContext(AppContext)
  function logoutHandler() {
    appContextData.logout()
  }
  let result = appContextData.energyBarDB.filter(element => element.email === appContextData.userEmail)
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Energy Bar App</div>
      </Link>
      <nav>
        <ul>
          {!appContextData.isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {appContextData.isLoggedIn && (
            <li>
              <Link to='/ingredients'>Ingredients</Link>
            </li>
          )}
          {appContextData.isLoggedIn && (
            <li>
              <Link to='/energybar'>My Energy Bar Items</Link>
            </li>
          )}
          {appContextData.isLoggedIn && (
            <li>
              <span className={classes.counter}>{result.length}</span>
            </li>
          )}
          {appContextData.isLoggedIn && (
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          )}
          {appContextData.isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
export default MainNavigation