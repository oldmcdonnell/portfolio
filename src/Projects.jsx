import { Container } from "react-bootstrap"
import Row from "react-bootstrap"
import { Link } from "react-router-dom"
import TicTacToe from '../img/ticTacToe.jpg'
import TodoList from '../img/todo_list.jpg'
import WeatherApp from '../img/weatherApp.jpg'


function Projects() {
    return (
      <div>
        <Link className="text-light" to='https://oldmcdonnell.github.io/tic-tac-toe/'>
           <img className="imageLink" src={TicTacToe} />
            Tic Tac Toe
            </Link>
            <Link className="text-light" to='https://to-do-list-three-beta-18.vercel.app/'>
           <img className="imageLink" src={TodoList} />
           Todo List
            </Link>
            <Link className="text-light" to='https://oldmcdonnell.github.io/weather-app//'>
           <img className="imageLink" src={WeatherApp} />
            Weather App
            </Link>
      </div>
    )
  }
  
  export default Projects