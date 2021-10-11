import React from 'react'
import {NavLink, Switch, Route} from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import FavoriteMoments from './FavoriteMoments'
import Error from './Error'

function App() {
	return (
		<div>
			<header>
				<div className="site-title">
	        		<h1>Collecting travel memories</h1>
	        		<p className="subtitle">Go explore, experience and capture your moments</p>
	      		</div>
				<nav>
					<ul>
						<li><NavLink className="nav-link" activeClassName="current-page" exact to="/">Home</NavLink></li>
						<li><NavLink className="nav-link" activeClassName="current-page" exact to="/aboutme">About Me</NavLink></li>
						<li><NavLink className="nav-link" activeClassName="current-page" exact to="/favoritemoments">Favorite Moments</NavLink></li>
					</ul>
				</nav>
			</header>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/aboutme">
					<AboutMe />
				</Route>
				<Route exact path="/favoritemoments">
					<FavoriteMoments />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
		</div>
	)
}
export default App