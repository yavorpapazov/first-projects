import { useState } from 'react'
import classes from './Building.module.css'
import { MdEdit, MdOutlineDelete } from 'react-icons/md'

function Building({bldgId, bldgName, bldgArea, bldgLocation, onRemoveBldg, onUpdateBldg}) {
  //Manage state for:
  // - display / hide the Update form
  // - updated NAME, AREA and LOCATION
  let [showForm, setShowForm] = useState(false)
  let [newName, setNewName] = useState('')
  let [newArea, setNewArea] = useState('')
  let [newLocation, setNewLocation] = useState('')
  //showUpdateForm switches state to display / hide the Update form
  function showUpdateForm() {
    setShowForm(prevState => !prevState)
  }
  //submitUpdateHandler sends the updated building information to the BuildingsPage component
  function submitUpdateHandler(e) {
		e.preventDefault()
		onUpdateBldg(bldgId, newName, newArea, newLocation)
		setNewName('')
		setNewArea('')
    setNewLocation('')
    setShowForm(false)
	}
  //The Building component renders the following elements:
    // - ID, NAME, AREA, LOCATION, components to edit / remove records
    // - the Update form (conditionally)
  let updateForm = (
    <form className={classes.form} onSubmit={submitUpdateHandler}>
			<div>
        <label htmlFor='bldgName'>Name</label>
        <input type='text' id='bldgName' required value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
			<div>
        <label htmlFor='bldgArea'>Area</label>
        <input type='text' id='bldgArea' required value={newArea} onChange={(e) => setNewArea(e.target.value)} />
      </div>
      <div>
        <label htmlFor='bldgLocation'>Location</label>
        <input type='text' id='bldgLocation' value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
      </div>
      <div>
        <button>Save</button>
      </div>  
    </form>
  )
  return (
    <div>
      <div className={classes.container}>
        <p>{bldgId}</p>
        <p>{bldgName}</p>
        <p>{bldgArea}</p>
        <p>{bldgLocation}</p>
        <div>
          <MdEdit className={classes.mdedit} size={30} onClick={showUpdateForm} />
          <MdOutlineDelete className={classes.mdremove} size={30} onClick={() => onRemoveBldg(bldgId)} />
        </div>
      </div>
      {showForm && updateForm}
    </div>
    
  )
}
export default Building