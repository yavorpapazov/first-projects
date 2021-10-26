import React from 'react'

interface Props {
    city: string
    dates: string
    description: string[]
    school: string
    title: string
    
}
const Education: React.FC<Props> = ({title, school, dates, city, description}) => {
    let myDescription = description.map((item, index) => <li key={index}>{item}</li>)
    return (
        <div>
            <h3>{title}</h3>
            <h4>{school}</h4>
            <h4>{dates}</h4>
	        <h4>{city}</h4>
            <ul className="section-ul">{myDescription}</ul>
        </div>
    )
}
export default Education