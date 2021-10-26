import React, {useState} from 'react'
import Education from './Education'
import Experience from './Experience'
import Hobbies from './Hobbies'
import education from './educationData'
import experience from './experienceData'
import hobbies from './hobbiesData'

const App: React.FC = () => {
  let [countEd, setCountEd] = useState<number>(0)
  let [countEx, setCountEx] = useState<number>(0)
  let [countHb, setCountHb] = useState<number>(0)
  let btnEx = experience.map(item => <button className={item.id === countEx ? "btnActive" : "btn"} key={item.id} onClick={() => setCountEx(item.id)}><h4>{item.company}</h4></button>)
  let btnEd = education.map(item => <button className={item.id === countEd ? "btnActive" : "btn"} key={item.id} onClick={() => setCountEd(item.id)}><h4>{item.school}</h4></button>)
  let btnHb = hobbies.map(item => <button className={item.id === countHb ? "btnActive" : "btn"} key={item.id} onClick={() => setCountHb(item.id)}><h4>{item.description}</h4></button>)
  return (
    <div>
      <h1 className="section-title">Yavor Papazov</h1>
      <section className="section-container">
        <div className="section-item section-item-one">
          <div className="photo-main-div">
					  <img src="./images/yavorphoto250.jpg" alt='' />
          </div>
				</div>
        <div className="section-item section-item-two">
          <div className="link-div">
            <a href="https://www.linkedin.com/in/yavorpapazov/" target="_blank" rel="noreferrer"><h2>Linkedin</h2></a>
          </div>
        </div>
      </section>
      <h2 className="section-title">Education</h2>
      <section className="section-container">
        <div className="section-item section-item-btn section-item-one">
          {btnEd}
        </div>
        <div className="section-item section-item-two">
          <Education {...education[countEd]} />
        </div>
      </section>
      <h2 className="section-title">Experience</h2>
      <section className="section-container">
        <div className="section-item section-item-btn section-item-one">
          {btnEx}
        </div>
        <div className="section-item section-item-two">
          <Experience {...experience[countEx]} />
        </div>
      </section>
      <h2 className="section-title">Language Skills</h2>
      <section className="section-container">
        <div className="section-item section-item-one">
          <ul className="section-ul">
            <li>Bulgarian</li>
            <li>English</li>
            <li>Spanish</li>
          </ul>
        </div>
      </section>
      <h2 className="section-title">Hobbies</h2> 
      <section className="section-container">
        <div className="section-item section-item-btn section-item-one">
          {btnHb}
        </div>
        <div className="section-item section-item-two">
          <Hobbies {...hobbies[countHb]} />
        </div>
      </section>
    </div>
  )
}
export default App