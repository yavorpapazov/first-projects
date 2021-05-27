import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import SingleItem from './SingleItem'

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/singleitem/:id" component={SingleItem} />
			</Switch>
		</Router>
	)
}
export default App