import { Link } from "react-router-dom"

function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
      <p>My Name is Eoin McDonnell</p>
      <p>I am training to become a full stack developer, I am also in school for cybersecurity </p>
      <p>with Awesome inc and NKU respectively. I have programmed on and for for several years</p>
      <p>My specialty is SQL, Python and now Javascript</p>
      <p>I am originall from Dublin, Ireland and am a dual citizen. I am also an avid runner and</p>

    </div>
  )
}


export default About
