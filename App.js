import React, {useState} from 'react'
import Experience from './Experience'
import Education from './Education'
import Hobbies from './Hobbies'
import experience from './experienceData'
import education from './educationData'
import hobbies from './hobbiesData'

function App() {
	let [countEx, setCountEx] = useState(0)
	let [countEd, setCountEd] = useState(0)
	let [countHb, setCountHb] = useState(0)
	let btnEx = experience.map(item => <button className={item.id === countEx ? "btnActive" : "btn"} key={item.id} onClick={() => setCountEx(item.id)}><h4>{item.company}</h4></button>)
	let btnEd = education.map(item => <button className={item.id === countEd ? "btnActive" : "btn"} key={item.id} onClick={() => setCountEd(item.id)}><h4>{item.school}</h4></button>)
	let btnHb = hobbies.map(item => <button className={item.id === countHb ? "btnActive" : "btn"} key={item.id} onClick={() => setCountHb(item.id)}><h4>{item.description}</h4></button>)
	return (
		<div>
			<h1 className="para">Yavor Papazov</h1>
			<div className="wrapper">
				<div>
					<img className="photo" src="./images/Yavor_Photo.jpg" alt='' />
				</div>
				<div>
					<a href="https://www.linkedin.com/in/yavorpapazov/" target="_blank" rel="noreferrer"><h2>Linkedin</h2></a>
				</div>
			</div>
			<h2 className="para">Education</h2>
			<div className="wrapper">
				<div>
					{btnEd}
				</div>
				<div>
					<Education {...education[countEd]} />
				</div>
			</div>
			<h2 className="para">Experience</h2>
			<div className="wrapper">
				<div>
					{btnEx}
				</div>
				<div>
					<Experience {...experience[countEx]} />
				</div>
			</div>
			<h2 className="para">Language Skills</h2>
			<ul className="myUl">
				<li>Bulgarian</li>
				<li>English</li>
				<li>Spanish</li>
			</ul>
			<h2 className="para">Hobbies</h2>
			<div className="wrapper">
				<div>
					{btnHb}
				</div>
				<div>
					<Hobbies {...hobbies[countHb]} />
				</div>
			</div>
		</div>
	)
}
export default App