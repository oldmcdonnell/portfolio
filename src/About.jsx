import { Link } from "react-router-dom"

function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
      <p>My Name is Eoin McDonnell</p>
      <p>I have a Bfa in 3-D Computer andimation and a MA is Digital Media technologies. I am currently training </p>
    </div>
  )
}


export default About
