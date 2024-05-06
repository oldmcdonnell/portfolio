import { Link } from "react-router-dom"
import Week6 from './blog/Week6'
// import { Accordion } from "react-bootstrap"
import Week7 from "./blog/Week7"

function Blog() {
    return(
        <div>
        <div>Blog</div>
        <div>Week 6</div>
        <h4>Week 6</h4>
        <Week6 />
        {/* <Link className="text-light" to='/Week6'>Week 6</Link> */}
        <h4>Week 7</h4>
        <Week7 />
        </div>
    )
}

export default Blog