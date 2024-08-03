import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TicTacToe from '../img/ticTacToe.jpg';
import TodoList from '../img/todo_list.jpg';
import WeatherApp from '../img/weatherApp.jpg';
import PreferredPolls from '../img/preferredPolls.png';
import ArtSocial from '../img/artsocial.png';
import AWSDoc from'../img/AWS_deploy_instructions.pdf'

function Projects() {
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Link className="text-light" to='https://preferred-polls.vercel.app/'>
                <Card.Img variant="top" src={PreferredPolls} />
              </Link>
              <Card.Body>
                <Card.Title>Preferred Polls</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Link className="text-light" to='https://art-social-seven.vercel.app/'>
                <Card.Img variant="top" src={ArtSocial} />
              </Link>
              <Card.Body>
                <Card.Title>Art Social</Card.Title>
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
                <Card.Img variant="top" src={WeatherApp} />
              </Link>
              <Card.Body>
                <Card.Title>Weather App</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Link className="text-light" to=' http://060211867096-roulettech.s3-website.us-east-1.amazonaws.com/'>
                <Card.Img variant="top" src={WeatherApp} />
              </Link>
              <Card.Body>
                <Card.Title>Deploy to AWS example</Card.Title>
                <Card.Link href={AWSDoc} target="_blank" rel="noopener noreferrer">AWS Deployment Instructions</Card.Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
