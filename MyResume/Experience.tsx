import React from 'react'

interface Props {
    city: string
    dates: string
    duties: string[]
    company: string
    title: string
    
}
const Experience: React.FC<Props> = ({title, company, dates, city, duties}) => {
    let myDuties = duties.map((item, index) => <li key={index}>{item}</li>)
    return (
        <div>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <h4>{dates}</h4>
	        <h4>{city}</h4>
            <ul className="section-ul">{myDuties}</ul>
        </div>
    )
}
export default Experience