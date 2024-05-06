import { Link } from "react-router-dom"
import selfie from '../img/selfie.jpg'
import Email from '../img/Email.svg'
import Github from '../img/Github.svg'
import Instagram from '../img/Instagram.svg'
import Phone from  '../img/Phone.svg'


function Contact() {
  return (
    <>
    <div className="p-5">
        <div className="d-flex justify-content-center"><Link to='/'><img src={selfie} className="profileImage"></img></Link></div>

        <div className="d-flex justify-content-center"><h1>Contacts</h1></div>
    </div>
    <div className="container">
    <div className="row justify-content-center align-items-md-center">
      <div className="d-flex justify-content-center col-sm-6 col-md-4 p-3 bg-light semiOpacity">
        <a href="mailto:oldmcdonnell@gmail.com">
          <img src={Email} class="iconStyle" />
        </a>
        </div>
      <div className="d-flex justify-content-center col-sm-6 col-md-4 p-3 bg-light semiOpacity">
        <img src={Phone} class="iconStyle" /> </div>
      <div className="d-flex justify-content-center col-sm-6 col-md-4 p-3 bg-light semiOpacity">
        <a href="https://github.com/oldmcdonnell">
          <img src={Github} class="iconStyle" />
            </a>
            </div>
    </div>
    <div className="row">
      <div className="d-flex justify-content-center col-sm-6 col-md-4 p-3 bg-light semiOpacity">
        <a href="gram.com/mcdonnell.eoin/">
          <img src={Instagram} class="iconStyle" />
            </a></div>
      <div className="d-flex justify-content-center col-sm-6 col-md-4 p-3 bg-light semiOpacity">
        <a href="https://www.linkedin.com/in/eoin-mcdonnell-01078923/">
          <i class="fa-brands fa-linkedin awesomeIcon">
            </i></a></div>
      <div className="d-flex justify-content-center col-sm-6 col-md-4 p-3 bg-light semiOpacity">
        <a href="https://www.deviantart.com/aliramojo">
          <i class="fa-brands fa-deviantart awesomeIcon">
            </i></a></div>
    </div>
  </div>
  </>
  )
}

export default Contact