import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Home() {
	let [isLoading, setIsLoading] = useState(false)
	let [foodItem, setFoodItem] = useState("")
	let [myData, setMyData] = useState([])
	let [message, setMessage] = useState(false)
	async function handleSubmit(e) {
		e.preventDefault()
		setIsLoading(true)
		let url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodItem}&pageSize=10&dataType=Survey (FNDDS)&api_key=QocwtKjD98vQwUYPN9U5c0HkxI4PbIzf3AFecgN1`
		const response = await fetch(url)
		const responseData = await response.json()
		if(responseData.foods.length < 1) {
			setMessage(true)
		} else {
			setMessage(false)
		}
		setFoodItem("")
		setIsLoading(false)
		setMyData(responseData.foods)
	}
	let result = myData.map(item => <div key={item.fdcId}>
			{item.description} -
			<Link className="linkHome" to={`/singleitem/${item.fdcId}`}>Details</Link>
		</div>)
	if(isLoading) {
		return (
			<div className="divHome">
				<h3>Loading...</h3>
			</div>
		)
	}
	return (
		<div className="container">
			<div className="divImage">
				<div className="divHome">
					<h2>Food Information</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor="foodItems">
							<h3>Search food item</h3>
						</label>
						<input type="text" id="foodItems" value={foodItem} placeholder="apple" onChange={(e) => setFoodItem(e.target.value)}/>
						<button className="btn" type="submit">Enter food item</button>
					</form>
				</div>
			</div>
			<div className="divData">
				<h2>{message ? "No food items matched your search criteria" : "Food Items"}</h2>
				{result}
			</div>
		</div>
	)
}
export default Home