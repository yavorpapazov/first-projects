import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {myContext} from './Context'

function SinglePhoto() {
    const {photoId} = useParams<{photoId: string}>()
	let data = useContext(myContext)
    let result = data?.getPhoto(photoId)
    return (
        <div className="single-photo-photos-div">
            <h3 className="single-photo-h3">{result?.name}</h3>
            <div className="single-photo-div">
                <img src={result?.img} alt='' />
            </div>
        </div>
    )
}
export default SinglePhoto