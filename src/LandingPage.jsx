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
                Some sample asdfasdfa asdf asdf asdf asdf asdf   
                tesxt
            </p>

        </div>
         
        </>
    )

}

export default LandingPage