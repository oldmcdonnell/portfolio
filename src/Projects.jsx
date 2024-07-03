import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import TicTacToe from '../img/ticTacToe.jpg'
import TodoList from '../img/todo_list.jpg'
import WeatherApp from '../img/weatherApp.jpg'
import PreferredPolls from '../img/preferredPolls.png'


function Projects(){
    return(
        <CardGroup>
            <Card>
                <Link className="text-light" to='https://preferred-polls.vercel.app/'>
                <Card.Img variant="top" src={TicTacToe} />
                </Link>
                <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Link className="text-light" to='https://oldmcdonnell.github.io/tic-tac-toe/'>
                <Card.Img variant="top" src={TicTacToe} />
                </Link>
                <Card.Body>
                <Card.Title>Tic Tac Toe</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Link className="text-light" to='https://to-do-list-three-beta-18.vercel.app/'>
                <Card.Img variant="top" src={TodoList} />
                </Link>
                <Card.Body>
                <Card.Title>ToDo List</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Link className="text-light" to='https://oldmcdonnell.github.io/weather-app//'>
                <Card.Img variant='top' src={WeatherApp} />
                </Link>
                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}

  
  export default Projects;