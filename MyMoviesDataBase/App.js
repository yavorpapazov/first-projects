import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {DataProvider} from './Context'
import Home from './Home'
import SingleSearchDetail from './SingleSearchDetail'
import SingleMovieDetail from './SingleMovieDetail'
import SingleTVDetail from './SingleTVDetail'
import SingleFamilyDetail from './SingleFamilyDetail'
import SingleDocumentaryDetail from './SingleDocumentaryDetail'
import Error from './Error'

function App() {
	return (
		<DataProvider>
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/search/:movieId">
						<SingleSearchDetail />
					</Route>
					<Route exact path="/movies/:movieId">
						<SingleMovieDetail />
					</Route>
					<Route exact path="/tv/:movieId">
						<SingleTVDetail />
					</Route>
					<Route exact path="/family/:movieId">
						<SingleFamilyDetail />
					</Route>
					<Route exact path="/documentary/:movieId">
						<SingleDocumentaryDetail />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</div>
		</DataProvider>
	)
}
export default App