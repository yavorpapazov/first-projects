import React, {useContext} from 'react'
import {myContext} from './Context'

function PhotosFilter() {
	let data = useContext(myContext)
	return (
		<div>
			<h1 className="topPhotosH1">Filter Photos</h1>
			<form className="formStyle">
				<h3><label htmlFor="theme">Photos Theme</label></h3>
				<select
					name="theme"
					id="theme"
					value={data.theme}
					onChange={data.handleChange}
				>
					<option value="all">all</option>
					<option value="beaches">beaches</option>
					<option value="buildings and nature">buildings and nature</option>
					<option value="food">food</option>
					<option value="hiking">hiking</option>
					<option value="nature">nature</option>
					<option value="sculptures">sculptures</option>
					<option value="sunsets">sunsets</option>
				</select>
			</form>
		</div>
	)
}
export default PhotosFilter