import { Link } from 'react-router-dom'
import classes from './HomePage.module.css'

function HomePage() {
    //The Home page renders the following elements:
    // - link to the Buildings page
    // - welcoming text
    // - image
    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <Link to='/buildings'>
                    <h1>Buildings</h1>
                </Link>
            </div>
            <h3 className={classes.item}>Welcome to The Building App</h3>
            <div className={classes.item}>
	          	<img src="./images/unsplash.jpg" alt="" />
            </div>
        </div>
    )
}
export default HomePage