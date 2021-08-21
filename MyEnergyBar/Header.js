import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import myContext from './Context'

function Header() {
	let data = useContext(myContext)
	return (
		<div className="navArea">
			<NavLink 
				className="link" 
				activeClassName="link-active" 
				exact to="/"
			><h2 className="pickSome">Ingredients</h2></NavLink>
			<NavLink 
				className="link" 
				activeClassName="link-active" 
				exact to="/myenergybar"
			><h2 className="pickSome">My energy bar <span>{data.energyBar.length}</span></h2></NavLink>
		</div>
	)
}
export default Header