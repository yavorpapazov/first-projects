import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Photos from './Photos'
import SinglePhoto from './SinglePhoto'
import Error from './Error'
import {PhotoProvider} from './Context'

function App() {
	return (
		<PhotoProvider>
			<div>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/photos">
						<Photos />
					</Route>
					<Route path="/photos/:photoId">
						<SinglePhoto />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</div>
		</PhotoProvider>
	)
}
export default App