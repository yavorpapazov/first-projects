import { useState, useEffect } from 'react'
import Building from '../components/building/Building'
import classes from './BuildingsPage.module.css'
import { MdAccountCircle } from 'react-icons/md'

function BuildingsPage () {
	//Manage state for ID, NAME, AREA and LOCATION variables
	let [id, setId] = useState('')
	let [name, setName] = useState('')
	let [area, setArea] = useState('')
	let [location, setLocation] = useState('')
	//Create an array that stores building information
	let [arr, setArr] = useState(() => {
		let localArr = localStorage.getItem('bldgs')
		return localArr ? JSON.parse(localArr) : []
	})
	//Set up local storage
	useEffect(() => {
		localStorage.setItem('bldgs', JSON.stringify(arr))
	}, [arr])
	//The submitHandler function adds building information
	//to the building array
	function submitHandler(e) {
		e.preventDefault()
		//Displays an alert message if there is a duplicate ID
		if(arr.some(item => item.bldgId === id)) {
			alert('Please enter a unique ID')
			return 
		}
		let bldgObj = {
			bldgId: id,
			bldgName: name,
			bldgArea: area,
			bldgLocation: location
		}
		setArr([...arr, bldgObj])
		setId('')
		setName('')
		setArea('')
		setLocation('')
	}
	//removeBldg removes a record by ID
	function removeBldg(buildingId) {
		let newArr = arr.filter(item => item.bldgId !== buildingId)
		setArr(newArr)
	}
	//updateBldg updates an existing record by ID
	function updateBldg(buildingId, newBuildingName, newBuildingArea, newBuildingLocation) {
		let newArr = arr.map(item => {
			if(item.bldgId === buildingId) {
				item = {...item, bldgName: newBuildingName, bldgArea: newBuildingArea, bldgLocation: newBuildingLocation}
				return item
			} else {
				return item
			}
		})
		setArr(newArr)
	}
	let result = arr.map(item => <Building key={item.bldgId} {...item} onRemoveBldg={removeBldg} onUpdateBldg={updateBldg} />)
	//The Buildings page renders the following elements:
    // - title with a welcoming text and an icon
    // - form that gathers building information – ID, NAME, AREA and LOCATION
	// - Building components that render the added building information
	return (
		<div className={classes.maindiv}>
			<div className={classes.title}>
				<h1>Welcome</h1>
          		<MdAccountCircle size={30} />
			</div>
			<form className={classes.form} onSubmit={submitHandler}>
				<div>
            		<label htmlFor='bldgId'>Id (numbers only)</label>
            		<input type='number' id='bldgId' required value={id} onChange={(e) => setId(e.target.value)} />
          		</div>
        		<div>
            		<label htmlFor='bldgName'>Name</label>
            		<input type='text' id='bldgName' required minLength='3' value={name} onChange={(e) => setName(e.target.value)} />
          		</div>
				<div>
            		<label htmlFor='bldgArea'>Area</label>
            		<input type='text' id='bldgArea' required value={area} onChange={(e) => setArea(e.target.value)} />
          		</div>
				  <div>
            		<label htmlFor='bldgLocation'>Location</label>
            		<input type='text' id='bldgLocation' value={location} onChange={(e) => setLocation(e.target.value)} />
          		</div>
				<div>
					<button>Add</button>
				</div>
          	</form>
			{arr.length > 0 &&
			<div className={classes.container}>
				<h3>ID</h3>
				<h3>NAME</h3>
				<h3>AREA</h3>
				<h3>LOCATION</h3>
        		<h3>ACTION</h3>
      		</div>}
			{result}
		</div>
	)
}
export default BuildingsPage