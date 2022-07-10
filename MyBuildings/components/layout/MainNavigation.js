import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  //The MainNavigation component renders a footer element with
  //links to the Home and Buildings pages
  return (
    <footer className={classes.footer}>
      <Link to='/'>
        <div className={classes.logo}>The Building App</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/buildings'>Buildings</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default MainNavigation