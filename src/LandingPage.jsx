import React from 'react';
import Painting from '../img/paint_for_website.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function LandingPage() {
    return (
        <>
            <Container>
                <Row className="justify-content-center align-items-center text-center">
                    <Col md={6} className="d-flex justify-content-center">
                        <img className='img-fluid paintingImage' src={Painting} alt="Painting" />
                    </Col>
                    <Col md={6} className="text-background-fade">
                        <p>
                            I am a programmer who specializes in database and backend applications.
                            I am also working toward a Master's degree in Cybersecurity.
                            I am working on adding to my Portfolio currently and learning new backend applications.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LandingPage;
