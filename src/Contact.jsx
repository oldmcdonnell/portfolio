import { Link } from "react-router-dom";
import selfie from '../img/selfie.jpg';
import Email from '../img/Email.svg';
import Github from '../img/Github.svg';
import Instagram from '../img/Instagram.svg';
import Phone from '../img/Phone.svg';
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <>
    <Container>
      <div className="p-5 text-center">
        <Link to='/'>
          <img src={selfie} alt="Profile" className="profileImage" />
        </Link>
        <h1>Contact</h1>
      </div>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 p-2 bg-light semiOpacity text-center">
            <a href="mailto:oldmcdonnell@gmail.com">
              <img src={Email} alt="Email" className="iconStyle" />
            </a>
          </div>
          <div className="col-6 col-sm-4 p-2 bg-light semiOpacity text-center">
            <a href="https://www.linkedin.com/in/mcdonnell-eoin/">
              <i className="fa-brands fa-linkedin awesomeIcon"></i>
            </a>
          </div>
          <div className="col-6 col-sm-4 p-2 bg-light semiOpacity text-center">
            <a href="https://github.com/oldmcdonnell">
              <img src={Github} alt="GitHub" className="iconStyle" />
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 p-2 bg-light semiOpacity text-center">
            <a href="https://instagram.com/mcdonnell.eoin/">
              <img src={Instagram} alt="Instagram" className="iconStyle" />
            </a>
          </div>
          <div className="col-6 col-sm-4 p-2 bg-light semiOpacity text-center">
            <a href="https://www.deviantart.com/aliramojo">
              <i className="fa-brands fa-deviantart awesomeIcon"></i>
            </a>
          </div>
        </div>
      </div>
      </Container>
    </>
  );
}

export default Contact;
