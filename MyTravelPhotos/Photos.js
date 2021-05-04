import React, {useState} from 'react'

function Photos(props) {
	let {id, img, title, category, description, photosData, setPhotosData} = props
	let [addDescription, setAddDescription] = useState("")
	let [myValue, setMyValue] = useState(false)
	function handleSubmit(e, myId) {
		e.preventDefault()
		let newData = photosData.map(item => {
			if(item.id === myId) {
				item.description = addDescription
				return item
			} else {
				return item
			}
		})
		setPhotosData(newData)
		setAddDescription("")
	}
	return (
		<div>
			<img src={img} alt='' />
			<h3>Title: {title}</h3>
			<h3>Categoty: {category}</h3>
			<h3>Description:</h3>
			<div className="divSize">
				<h3>{myValue ? description : `${description.slice(0, 65)}`}
					<button className={description && description.length > 65 ? "btn" : "btnHide"} onClick={() => setMyValue(!myValue)}>
						{myValue ? "Show less" : "Read more..."}
					</button>
				</h3>
			</div>
			<form onSubmit={(e) => handleSubmit(e, id)}>
				<textarea value={addDescription} onChange={(e) => setAddDescription(e.target.value)} />
				<br />
				<button className="btn" type="submit">Add description</button>
			</form>
			<br />
		</div>
	)	
}
export default Photos