import { Link } from "react-router-dom"
import MyNavbar from "./MyNavbar"
import selfie from '../img/selfie.jpg'


function Contact() {
  return (
    <div className="p-5">
        <MyNavbar />
        <div className="d-flex justify-content-center"><Link to='/'><img src={selfie} className="profileImage"></img></Link></div>

        <h1>Contacts</h1>
        <p> test </p>
    </div>
  )
}

export default Contact