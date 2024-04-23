import { Link } from "react-router-dom"
import MyNavbar from "./MyNavbar"
import selfie from '../img/selfie.jpg'
import github from '../img/Github.svg'

function Contact() {
  return (
    <div className="p-5">
        <MyNavbar />
        <div className="d-flex justify-content-center"><Link to='/'><img src={selfie} className="profileImage"></img></Link></div>

        <div className="d-flex justify-content-center"><h1>Contacts</h1></div>
        <p> test </p>
    </div>
  )
}

export default Contact