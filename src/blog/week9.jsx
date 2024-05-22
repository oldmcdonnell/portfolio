import { Link } from "react-router-dom"
// import { Accordion } from "react-bootstrap"

const Questions = () => {
return (
    <div className="container">
        <p>Things we learned in Python and Django this week</p>
        <p>Django installation, keep filenames seperate and creative, gitignore on base folder file, and add the env </p>
        <p>packing and unpacking tuples</p>
        <p>*args and **kwargs</p>
        <p>List is a collection which is ordered and changeable. Allows duplicate members.</p>
        <p>Tuple is a collection which is ordered and unchangeable. Allows duplicate members.</p>

        <p>Set is a collection which is unordered, unchangeable*, and unindexed. No duplicate members.</p>
        <p>Dictionary is a collection which is ordered** and changeable. No duplicate members.</p>
        <p>arjan.code/diagnosis</p>
        <p>Using through for ManytoMany when using a third operator</p>
        <p>- using multiple excepts for the same try</p>
        <p>the python </p>
        <p>DoesNotExist and exisits</p>
        <p>The through fuction in a class in models for many to many</p>

        <p></p>
    </div>
)
}

function Week9() {
    return(
        <div>
        <div>Week 6 test</div>
        <Questions />
        </div>
    )
}

export default Week9