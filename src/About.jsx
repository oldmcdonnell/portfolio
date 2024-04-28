import { Link } from "react-router-dom"

function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
      <p>My Name is Eoin McDonnell</p>
      <p>I have a Bfa in 3-D Computer andimation and a MA is Digital Media technologies. I am currently training </p>
      <p>with Aweseome INC as a full stack developer and for a MS in Cybersecurity with NKU</p>
      <p></p>
      <p>I am originall from Dublin, Ireland and am a dual citizen. I am also an avid runner and</p>

    </div>
  )
}


export default About
