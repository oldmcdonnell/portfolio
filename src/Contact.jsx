import { Link } from "react-router-dom"
import selfie from '../img/selfie.jpg'
import Email from '../img/Email.svg'
import Github from '../img/Github.svg'
import Instagram from '../img/Instagram.svg'

function Contact() {
  return (
    <div className="p-5">
        <div className="d-flex justify-content-center"><Link to='/'><img src={selfie} className="profileImage"></img></Link></div>

        <div className="d-flex justify-content-center"><h1>Contacts</h1></div>
        <p> test </p>
    </div>
  )
}

export default Contact