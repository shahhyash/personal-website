import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

class ProjectCard extends React.Component {
    render() {
        const {projectTitle} = this.props;
        return (
            <Card style={{
                width: "325px",
                margin: "0 10px 20px 10px",
                flexGrow: "1"
            }}>
                <Card.Header style={{display: "flex", justifyContent: "space-between"}}>
                    <h5>{projectTitle}</h5>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {this.props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export class ProjectsComponent extends React.Component {
    render() {
        return (
            <Container>
                <hr/>
                <Row noGutters>
                    <h1>Projects</h1>
                </Row>
                <hr/>
                <Row style={{justifyContent: "space-around", marginBottom: "25px"}}>
                    <ProjectCard projectTitle="Secretary Slackbot">
                        <Row noGutters>
                            Developed a slackbot to automate some of the more mundane tasks designated for the secretary. 
                            The slackbot uses webhooks built with Firebase Cloud Functions to automatically complete tasks
                            such as creating meeting notes from a template, setting up calendar events, sending out status 
                            updates via email and managing reminders for action items for the executive board.
                        </Row>
                        <Row noGutters className="mt-3">Built using Firebase Cloud Functions, Google APIs for Drive and Calendar, & NodeJS</Row>
                    </ProjectCard>
                    <ProjectCard projectTitle="Home Automation">
                        <Row noGutters>
                            Integrated various open-sourced technologies to setup a smart home server with extensive privacy 
                            considerations. Many of the smart home offerings in the consumer market employ their own
                            servers to control their IoT devices. For this project, I used Docker services to bundle the 
                            various platforms, used MQTT for communication across devices, and developed Python scripts
                            to connect other devices such as TVs.
                        </Row>
                        <Row noGutters className="mt-3">
                            Built using Docker, Bash, Python, HomeAssisstant, Mosquitto, & Tasmota.
                        </Row>
                    </ProjectCard>
                    <ProjectCard projectTitle="LaunchR Dashboard">
                        <Row noGutters>
                            Developed a dashboard for the participants of the first ever LaunchR Tech Startup Accelerator
                            at Rutgers University. This dashboard allowed participants, judges, and mentors to effectively
                            collaborate with each other. The web-based application allowed mentors to provide feedback and
                            resources to their teams, and allowed participants to track their progress and submit deliverables
                            to the judges for review.
                        </Row>
                        <Row noGutters className="mt-3">
                            Built using Meteor Framework, NodeJS, & Bootstrap
                        </Row>
                    </ProjectCard>
                </Row>
            </Container>
        );
    }
}
