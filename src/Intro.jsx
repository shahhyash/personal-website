import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Particles from 'react-particles-js';

export class IntroComponent extends React.Component {
    render() {
        return (
            <Jumbotron fluid style={{
                backgroundColor: "#424242",
                color: "white",
            }}>
                <Container>
                    <Image src="images/avatar.jpg" roundedCircle style={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "2em"
                    }}/>
                    <h2 className="alt"><strong>Yash Shah</strong></h2>
                    <p>Hi, I'm a student majoring in Computer Engineering & Computer Science at Rutgers University. I'm incredibly passionate about technology and entrepreneurship and I'm constantly working towards gaining experience in both fields.</p>
                    <Row noGutters>
                        <Button variant="outline-light" className="mt-2 mr-2" href="mailto:yash.shah830@rutgers.edu" style={{zIndex: 99}}>
                            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                            Email
                        </Button>
                        <Button variant="outline-light" className="mt-2 mr-2" href="/files/resume.pdf" style={{zIndex: 99}}>
                            <FontAwesomeIcon className="mr-2" icon={faFileAlt} />
                            Resume
                        </Button>
                        <Button variant="outline-light" className="mt-2 mr-2" href="https://github.com/shahhyash" style={{zIndex: 99}}>
                            <FontAwesomeIcon className="mr-2" icon={faGithub} />
                            Github
                        </Button>
                        <Button variant="outline-light" className="mt-2" href="https://www.linkedin.com/in/shahhyash" style={{zIndex: 99}}>
                            <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
                            LinkedIn
                        </Button>
                    </Row>
                </Container>
                <Particles width="75%" style={{
                    position: "absolute",
                    top: 0,
                    left: "25%"
                }} params={{
                    "particles": {
                        "number": {
                            "value": 35
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            }
                        }
                    }
                }} />
            </Jumbotron>
        );
    }
}
