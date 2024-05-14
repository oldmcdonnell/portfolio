import Painting from '../img/paint_for_website.jpg'


const Title = () => {
    return (
      <div className="container">
      <div className="">
      <h1>
  Eoin McDonnell portfolio
      </h1>
      </div>
      </div>
    )
  }

  /*-whe ist't this working?-*/
function LandingPage (){
    return(
        <>
        <div className='d-flex mx-auto col-6'>
            <img className='paintingImage' src={Painting} />
            <p>
               Hello and welcome to my portfolio. I am a software developer who has a lot of experience in things that are not easy to show off. A lot of my work
               has been with SQL databases. Helping troubleshoot problem for companies like Diebold, Garda, and Brinks.I have been interested and working in tech for many years.
               I have had a lot of different roles like technical support, to quality assurance, to animator, to programmer.   
            </p>

        </div>
         
        </>
    )

}

export default LandingPage