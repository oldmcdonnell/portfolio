import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sippy from '../img/sippy.png';
import TicTacToe from '../img/ticTacToe.jpg';
import TodoList from '../img/todo_list.jpg';
import WeatherApp from '../img/weatherApp.jpg';
import PreferredPolls from '../img/preferredPolls.png';
import ArtSocial from '../img/artsocial.png';
import AWSDoc from'../img/AWS_deploy_instructions.pdf'
import AWSExample from '../img/AwsExample.png'
import PrivacyPaper from './PrivacyPaper';

function Projects() {
  return (
    <Container className="animate__animated animate__fadeIn">
      <Row>
        <Col>
          <CardGroup>
          <Card>
              <Link className="text-light" to='https://sippy-prod.vercel.app/'>
                <Card.Img variant="top" src={Sippy} />
              </Link>
              <Card.Body>
                <Card.Title>Sippy Project</Card.Title>
                {/* Replace Card.Link with React Router's Link for internal routing */}
                Sippy Project WIP. in Next JS and TypeScript with OAuth setup. Will be iplementing google API
  
            </Card.Body>
            </Card>
            <Card>
              <Link className="text-light" to='https://preferred-polls.vercel.app/'>
                <Card.Img variant="top" src={PreferredPolls} />
              </Link>
              <Card.Body>
                <Card.Title>Preferred Polls</Card.Title>
                {/* Replace Card.Link with React Router's Link for internal routing */}
                <Link to="/privacy-paper" className="card-link" target="_blank" rel="noopener noreferrer">
               Privacy in Electronic Voting Systems
                </Link>
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
              <Link className="text-light" to='http://060211867096-roulettech.s3-website.us-east-1.amazonaws.com/'>
                <Card.Img variant="top" src={AWSExample} />
              </Link>
              <Card.Body>
                <Card.Title>Deploy to AWS example - billing issues down currently </Card.Title>
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
