import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import BuildingsPage from './pages/BuildingsPage'

function App() {
	//Enable routing between Home and Buildings pages
	//The Layout component wraps up the whole application
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				<Route path='/buildings'>
					<BuildingsPage />
				</Route>
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</Layout>
	)
}
export default App