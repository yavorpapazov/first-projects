import React, {useState} from 'react'
import StockItem from './StockItem'
import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Wrapper from './App.styles'
import Error from './Error'

function App() {
	let [isLoading, setIsLoading] = useState(false)
	let [inputError, setInputError] = useState(false)
	let [error, setError] = useState(false)
	let [myData, setMyData] = useState("")
	let [tickerSymbol, setTickerSymbol] = useState("")
	let [stock, setStock] = useState([])
	async function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		setInputError(false)
		setError(false)
		if(tickerSymbol === "") {
			setInputError(true)
		}
		const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${tickerSymbol},EUR/USD&interval=1min&apikey=e08382ec8d004ce4b7a5d49ed9e4c95b`)
		const myData = await response.json()
		setTickerSymbol("")
		setIsLoading(false)
		setMyData(myData)
		let companyObj = {}
		let companyArr = []
		for(let symbol in myData) {
			if(myData[symbol].status === 'error') {
				setError(true)
				break
			} else if(symbol !== "EUR/USD") {
				companyObj = {id: myData[symbol].values[0].close, ticker: symbol, close: myData[symbol].values[0].close}
				companyArr.push(companyObj)
			}
		}
		setStock(companyArr)
	}
	function handleRemove(myId) {
		let newStock = stock.filter(item => item.id !== myId)
		setStock(newStock)
	}
	let result = stock.map(item => <StockItem key={item.id} {...item} handleRemove={handleRemove} />)
	if(isLoading) {
		return <LinearProgress />
	} else if(error) {
		return <Error setError={setError} />
	}
	return (
		<Wrapper>
			<Container className='container'>
				<Typography variant='h6' align='center'>
					Enter ticker symbols, separeted by a comma (for example: AAPL, MSFT, AMZN)
				</Typography>
				<Typography variant='body1' align='center'>
					Suported - 8 API req/min
				</Typography>
				<form className='myForm' noValidate autoComplete='off' onSubmit={handleSubmit}>
					<TextField 
						onChange={(e) => setTickerSymbol(e.target.value)}
						label='Enter ticker symbols'
						error={inputError}
					/>
					<Button className='button' type='submit' color='primary' variant='contained' size='large'>
						Get data
					</Button>
				</form>
				<Typography variant='h6' align='center'>
					Current stock price info in USD:	
				</Typography>
				{result}
			</Container>
		</Wrapper>
	)
}
export default App