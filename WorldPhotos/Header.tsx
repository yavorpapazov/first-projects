import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="nav-area">
            <div className="nav-area-div">
                <Link className="nav-area-link" to="/">
				    <h2>Home</h2>
			    </Link>
            </div>
            <div className="nav-area-div">
               <Link className="nav-area-link" to="/photos">
				    <h2>Photos</h2>
			    </Link> 
            </div>
			
        </div>
    )
}
export default Header