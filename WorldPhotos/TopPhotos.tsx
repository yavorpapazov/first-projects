import React, {useContext} from 'react'
import {myContext} from './Context'
import MyPhotos from './MyPhotos'

function TopPhotos() {
    let data = useContext(myContext)
    let result = data?.allPhotos.filter(item => item.top === true).map(item => <MyPhotos key={item.id} {...item} />)
    return (
        <div className="photos-div">
            <h3 className="add-margin">Best Photos</h3>
            <div className="container">
                {result}
            </div>
        </div>
    )
}
export default TopPhotos