import React from 'react';
import Painting from '../img/paint_for_website.jpg';
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
                            I can offer a wealth of knowledge under pressure as someone who has had to help fix databases of major armored car carriers like Brinks, Diebold, Loomis, and Garda. Sometimes these calls would occur when I was on call as their IT was doing upgrades… so middle of the night on a Saturday when customer impact would be minimal. Currently my focus is in development, building and creating programs and systems. I have I have a great ability to learn quickly. In the past I have created documentation not just for end-users but other people on my team that is clear and concise. This is an example of a document pared down from a 22 page document to 2 pages in order to setup an auditcon lock. 
                            <a href="https://dormakaba.rokka.io/original/5d1921/1638395645_Auditcon-Quick%20Guide-Oct%202021-A1.pdf" target="_blank" rel="noopener noreferrer">Auditcon Quick Guide</a>.
                            99% of auditcon calls to dormakaba were techs in the field setting up the lock initially for the customer and struggling with the 22 page document. This was also done for cost saving measures as it would be cheaper to print.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default LandingPage;
