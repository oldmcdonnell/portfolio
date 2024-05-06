import { Link } from "react-router-dom"
// import { Accordion } from "react-bootstrap"

const Questions = () => {
return (
    <div className="container">
        <div className="col-4 mx-auto">
            <h4>
            What have you learned about CLIs? Do you think they are scary?
            </h4>
            <p>
           Usiing CLI we have installed various packated and react components. Every new project build requires a frest installed
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

function Week7() {
    return(
        <div>
        <div>Week 6 test</div>
        <Questions />
        </div>
    )
}

export default Week7