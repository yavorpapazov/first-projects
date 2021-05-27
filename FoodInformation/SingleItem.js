import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

function SingleItem() {
	let {id} = useParams()
	let [isLoading, setIsLoading] = useState(false)
	let [myItem, setMyItem] = useState([])
	let [itemName, setItemName] = useState('')
	useEffect(() => {
		async function getSingleItem() {
			setIsLoading(true)
			let url = `https://api.nal.usda.gov/fdc/v1/food/${id}?api_key=QocwtKjD98vQwUYPN9U5c0HkxI4PbIzf3AFecgN1`
			const response = await fetch(url)
			const responseData = await response.json()
			setItemName(responseData.description)
			setIsLoading(false)
			setMyItem(responseData.foodNutrients)
		}
		getSingleItem()
	}, [id])
	let result = myItem.filter(item => 
			item.nutrient.name === "Water" ||
			item.nutrient.name === "Protein" ||
			item.nutrient.name === "Total lipid (fat)" ||
			item.nutrient.name === "Carbohydrate, by difference" ||
			item.nutrient.name === "Fiber, total dietary" ||
			item.nutrient.name === "Sugars, total including NLEA").map(item => 
				<div key={item.id}>{item.nutrient.name} - {item.amount}g</div>)
	if(isLoading) {
		return (
			<div className="divHome">
				<h3>Loading...</h3>
			</div>
		)
	}
	if(myItem) {
		return (
			<div className="divHome">
				<h3>Food Item - {itemName}</h3>
				(Portion: 100g)
				<h4>{result}</h4>
				<Link className="linkHome" to="/">Back home</Link>
			</div>
		)
	} else {
		return (
			<div className="divHome">
				<h3>Page - SingleItem</h3>
			</div>
		)
	}
}
export default SingleItem