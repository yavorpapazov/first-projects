import { useContext } from 'react'
import { AppContext } from './store/app-context'
import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import IngredientsPage from './pages/IngredientsPage'
import EnergyBarPage from './pages/EnergyBarPage'
import UserProfile from './components/profile/UserProfile'

function App() {
	let appContextData = useContext(AppContext)
  	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
				{!appContextData.isLoggedIn && (
					<Route path='/auth'>
						<AuthPage />
					</Route>
				)}
				{appContextData.isLoggedIn && (
					<Route path='/ingredients'>
						<IngredientsPage />
					</Route>
				)}
				{appContextData.isLoggedIn && (
					<Route path='/energybar'>
						<EnergyBarPage />
					</Route>
				)}
				{appContextData.isLoggedIn && (
					<Route path='/profile'>
						<UserProfile />
					</Route>
				)}
				<Route path='*'>
					<Redirect to='/' />
				</Route>
			</Switch>
		</Layout>
  	)
}
export default App