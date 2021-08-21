import {useState, useEffect} from 'react'
import ingredientsData from './ingredientsData'

function useCustom() {
	let [myIngredients, setMyIngredients] = useState([])
	let [energyBar, setEnergyBar] = useState([])
	useEffect(() => {
		setMyIngredients(ingredientsData)
	}, [])
	function handleAdd(item) {
		setEnergyBar([...energyBar, item])
	}
	function handleRemove(id) {
		let result = energyBar.filter(item => item.id !== id)
		setEnergyBar(result)
	}
	function sumCarbs() {
		let sum = energyBar.map(item => item.carbs)
		let val = 0
		for(let i of sum) {
			val = val + i
		}
		return val
	}
	function sumFat() {
		let sum = energyBar.map(item => item.fat)
		let val = 0
		for(let i of sum) {
			val = val + i
		}
		return val
	}
	function sumFiber() {
		let sum = energyBar.map(item => item.fiber)
		let val = 0
		for(let i of sum) {
			val = val + i
		}
		return val
	}
	function sumKcal() {
		let sum = energyBar.map(item => item.kcal)
		let val = 0
		for(let i of sum) {
			val = val + i
		}
		return val
	}
	function sumProtein() {
		let sum = energyBar.map(item => item.protein)
		let val = 0
		for(let i of sum) {
			val = val + i
		}
		return val
	}
	function sumSugars() {
		let sum = energyBar.map(item => item.sugars)
		let val = 0
		for(let i of sum) {
			val = val + i
		}
		return val
	}
	return [myIngredients, handleAdd, energyBar, handleRemove, sumCarbs, sumFat, sumFiber, sumKcal, sumProtein, sumSugars]
}
export default useCustom