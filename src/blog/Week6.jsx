import { Link } from "react-router-dom"
// import { Accordion } from "react-bootstrap"

const Questions = () => {
return (
    <div className="container">
        <div className="col-4 mx-auto">
            <h4>
            Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?
            </h4>
            <p>
            React is a little difficult but it is very responsive and I don't think it should be too difficult overall
            </p>
        </div>
        <div className="col-4 mx-auto">
            <h4>
            What Frameworks or Libraries are you interested in learning more about?
            </h4>
            <p>
            I am interested in Yarn. I saw some yarn tutorial on setting up a comment section that looked pretty interesting.
            </p>
        </div>
        <div className="col-4 mx-auto">
            <h4>
            Find one emerging JavaScript tool that you would like to learn more about or use in your final project.
            </h4>
            <p>
            hmmm.. I wlil check this out
            </p>
        </div>
    </div>
)
}

function Week6() {
    return(
        <div>
        <div>Week 6 test</div>
        <Questions />
        </div>
    )
}

export default Week6