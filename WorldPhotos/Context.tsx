import React, {createContext, useState, useEffect} from 'react'
import photosData from './photosData'

interface photosObj {
    id: string;
	name: string;
	theme: string;
	img: string;
	top: boolean;
}
type TypeContext = {
    allPhotos: photosObj[];
    getPhoto: (onePhotoId: string) => photosObj | undefined;
    theme: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
let myContext = createContext<TypeContext | undefined>(undefined)
interface Props {
    children: React.ReactNode;
}
function DataProvider({children}: Props) {
    let [allPhotos, setAllPhotos] = useState<photosObj[]>([])
    let [theme, setTheme] = useState('all')
    useEffect(() => {
		setAllPhotos(photosData)
	}, [])
    function getPhoto(onePhotoId: string) {
		let tempPhotos = [...allPhotos]
		let onePhoto = tempPhotos.find(item => item.id === onePhotoId)
		return onePhoto
	}
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setTheme(e.target.value)
	}
    return (
        <myContext.Provider value={{allPhotos, getPhoto, theme, handleChange}}>
			{children}
		</myContext.Provider>
    )
}
export {DataProvider, myContext}