import React, {useState} from 'react'

function App() {
	let [isLoading, setIsLoading] = useState(false)
	let [stock, setStock] = useState([])
	let [myData, setMyData] = useState("")
	let [tickerSymbol, setTickerSymbol] = useState("")
	async function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${tickerSymbol},EUR/USD&interval=1min&apikey=e08382ec8d004ce4b7a5d49ed9e4c95b`)
		const myData = await response.json()
		setTickerSymbol("")
		setIsLoading(false)
		setMyData(myData)
		let companyObj = {}
		let companyArr = []
		for(let symbol in myData) {
			if(symbol !== "EUR/USD") {
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
	let result = stock.map(item => <div key={item.id}>{item.ticker}: {item.close} <button className="btn" onClick={() => handleRemove(item.id)}>Remove</button></div>)
	if(isLoading) {
		return (
			<div className="wrapper">
				<h3>Loading...</h3>
			</div>
		)
	} else {
		return (
			<div className="wrapper">
				<form onSubmit={handleSubmit}>
					<label htmlFor="tickerSymbols">
						<h3>Enter ticker symbols, separeted by a comma, no space (for example: AAPL,MSFT,AMZN)</h3>
						<h4>Suported - 8 API req/min</h4>
					</label>
					<input type="text" id="tickerSymbols" value={tickerSymbol} onChange={(e) => setTickerSymbol(e.target.value)}/>
					<button type="submit" className="btn">Enter ticker symbols</button>
				</form>
				<h3>Current stock price info in USD:</h3>
				{result}
			</div>
		)
	}
}
export default App