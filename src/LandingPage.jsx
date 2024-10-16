import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'; // Make sure you import your CSS

function LandingPage() {
    return (
        <>
            {/* Apply the background-image class to the container */}
            <Container className="background-image">
                <Row className="justify-content-center align-items-center text-center">
                    <Col md={12} className="text-background-fade">
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
