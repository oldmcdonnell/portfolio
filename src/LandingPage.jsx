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

function LandingPage (){
    return(
        <>
        <div className='d-flex mx-auto'>
            <img className='paintingImage' src={Painting} />

        </div>
         
        </>
    )

}

export default LandingPage