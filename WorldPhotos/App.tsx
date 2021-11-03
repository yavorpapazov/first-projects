import React from 'react'
import {DataProvider} from './Context'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Photos from './Photos'
import Header from './Header'
import SinglePhoto from './SinglePhoto'

function App() {
  return (
	<DataProvider>
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
		</Switch>
	</DataProvider>
		   
  )
}
export default App