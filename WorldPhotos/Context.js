import React, {useState, useEffect} from 'react'
import photosData from './photosData'

let myContext = React.createContext()
function PhotoProvider({children}) {
	let [allPhotos, setAllPhotos] = useState([])
	let [theme, setTheme] = useState('all')
	useEffect(() => {
		setAllPhotos(photosData)
	}, [])
	function getPhoto(onePhotoId) {
		let tempPhotos = [...allPhotos]
		let onePhoto = tempPhotos.find(item => item.id === onePhotoId)
		return onePhoto
	}
	function handleChange(e) {
		setTheme(e.target.value)
	}
	return (
		<myContext.Provider value={{allPhotos, getPhoto, theme, handleChange}}>
			{children}
		</myContext.Provider>
	)
}
export {PhotoProvider, myContext}