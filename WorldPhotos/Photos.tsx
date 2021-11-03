import React, {useContext} from 'react'
import {myContext} from './Context'
import MyPhotos from './MyPhotos'
import PhotosFilter from './PhotosFilter'

function Photos() {
    let data = useContext(myContext)
    let resultAll = data?.allPhotos.map(item => <MyPhotos key={item.id} {...item} />)
    let resultFilter = data?.allPhotos.filter(item => item.theme === data?.theme).map(item => <MyPhotos key={item.id} {...item} />)
    return (
        <div className="photos-div">
            <PhotosFilter />
            <div className="container">
                {data?.theme === "all" ? resultAll : resultFilter}
            </div>
        </div>
    )
}
export default Photos