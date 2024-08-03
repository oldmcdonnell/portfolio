import React from 'react';
import Painting from '../img/paint_for_website.jpg';
import SnailKnights from '../img/SnailKnightsJousting.jpg'
import { Container, Row, Col } from 'react-bootstrap';

// Title Component
const Title = () => {
    return (
        <Container>
            <div className="text-center my-4">
                <h1>Eoin McDonnell's Portfolio</h1>
            </div>
        </Container>
    );
};

// LandingPage Component
function LandingPage() {
    return (
        <>
            <Title />
            <Container>
                <Row className="justify-content-center align-items-center text-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img className='img-fluid paintingImage' src={Painting} alt="Painting" />
                    </Col>
                    <Col md={6}>
                        <p>
                            I am a programming who specializes in database and backend applications.
                            I am also working towward a Master's degree in Cybersecurity. 
                            I am working on adding to my Portfolio currently and learning new backend applications.
             
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LandingPage;
