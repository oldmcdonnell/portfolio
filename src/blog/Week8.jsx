import { Link } from "react-router-dom"
// import { Accordion } from "react-bootstrap"

const Questions = () => {
return (
    <div className="container">
        <div className="col-4 mx-auto">
            <h4>
            
            Now that you are halfway through bootcamp, what has been the biggest hurdle 
            that you have gone past? What do you think is going to be the next biggest thing to power through?

            </h4>
            <p>
           Learning the languages can be difficult. Keeping caught up on all the assignments has been difficult. 
             </p>
        </div>
        <div className="col-4 mx-auto">
            <h4>
            If you were to build a CLI, what would it do?
            </h4>
            <p>
            I would create a CLI that would answer any question possible. It would need to be able to use an API with anothropic or some other AI information
            </p>
        </div>
        <div className="col-4 mx-auto">
            <h4>
            List some ideas that without a Framework, would take you a long time to code
            </h4>
            <p>
            If the child is very deep you would have to pass the variable down several times. 
            </p>
        </div>
    </div>
)
}

function Week8() {
    return(
        <div>
        <div>Week 6 test</div>
        <Questions />
        </div>
    )
}

export default Week8