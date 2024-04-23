import { Link } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react";
import MyNavbar from './MyNavbar'

const Title = () => {
  return (
    <h1>
      Hello World!
    </h1>
  )
}

function App() {
  return (
    <div 
      className="bg-secondary h-100 p-5"
      style={{ color: 'white' }}
    > 
    <MyNavbar />
    <CounterButton />
    <div></div>
      <Title />
      <Link className="text-light" to='/about'>About</Link>
      <p>
      <Link className="text-light" to='/contact'>contacts</Link>
      </p>
    </div>
  )
}


export default App
