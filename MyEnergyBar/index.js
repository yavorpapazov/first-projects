import ReactDOM from 'react-dom'
import './index.css'
import './style.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './store/app-context'

ReactDOM.render(
	<AppContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AppContextProvider>,
	document.getElementById('root')
);