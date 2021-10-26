import React from 'react'

interface Props {
    img: string    
}
const Hobbies: React.FC<Props> = ({img}) => {
    return (
        <div>
            <div className="photo-hobbies-div">
                <img src={img} alt='' />
            </div>
        </div>
    )
}
export default Hobbies