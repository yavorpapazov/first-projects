import React, {useState, useEffect} from 'react'
import data from './textData'
import Photos from './Photos'

function App() {
	let catObj = {
		"all": item => item,
		"people": item => item.category === "people",
		"nature": item => item.category === "nature"
	}
	let [cat, setCat] = useState("all")
	let [photosData, setPhotosData] = useState(data)
	let result = photosData.filter(catObj[cat]).map(item => <Photos key={item.id} {...item} photosData={photosData} setPhotosData={setPhotosData} />)
	useEffect(() => {
		let data = localStorage.getItem("myPhotos")
		if(data) {
			setPhotosData(JSON.parse(data))
		}
	}, [])
	useEffect(() => {
		localStorage.setItem("myPhotos", JSON.stringify(photosData))
	}, [photosData])
	return (
		<div className="wrapper">
			<button className="btnMain" onClick={() => setCat("all")}>All Photos</button>
			<button className="btnMain" onClick={() => setCat("nature")}>Nature</button>
			<button className="btnMain" onClick={() => setCat("people")}>People</button>
			<h3>My Photos</h3>
			{result}
		</div>
	)
}
export default App