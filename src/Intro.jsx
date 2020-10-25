import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Button,
    Image,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Particles from 'react-particles-js';

export class IntroComponent extends React.Component {
    render() {
        return (
            <Jumbotron style={{
                backgroundColor: "#424242",
                color: "white",
            }}>
                <Container>
                    <Image src="images/avatar.png" roundedCircle style={{
                        width: "100px",
                        height: "100px",
                        marginBottom: "2em"
                    }}/>
                    <h2 className="alt"><strong>Yash Shah</strong></h2>
                    <p>Hi, I'm a software engineer at Khan Academy. </p>
                    <Row noGutters>
                        <Button variant="outline-light" className="mt-2 mr-2" href="mailto:yash.shah830@gmail.com" style={{zIndex: 99}}>
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
