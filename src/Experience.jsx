import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'

const EXPERIENCE_DATA = [
    {
        url: 'images/khan-academy.png',
        color: '#0A2A66',
        company: 'Khan Academy',
        position: 'Software Engineering Intern',
        duration: 'June 2019 - August 2019',
        description: [
            'Developed an end-to-end solution for onboarding users onto district offerings.',
            'Added critical validation to an Apache Beam pipeline foringesting user data into Google Cloud Datastore with extensive latency and privacy considerations.',
            'Enhanced support tools forthe Classrooms product by surfacing user statistics to aid in debugging.'
        ],
        tools: ['JS', 'Python', 'Kotlin', 'React', 'GraphQL', 'Apache Beam', 'Google Dataflow']
    },
    {
        url: 'images/arria.png',
        color: '#343a40',
        company: 'Arria NLG PLC',
        position: 'Solutions Engineering Intern',
        duration: 'June 2018 - May 2019',
        description: [
            'Developed an extension which produces contextually useful synonyms for the natural language generation engine.',
            'Designed proof-of-concept narratives using Arria’s Articulate Text Language (ATL) for training purposes.'
        ],
        tools: ['Javascript', 'ATL', 'NLG Studio', 'PowerBI']
    },
    {
        url: 'images/siemens.png',
        color: '#007F80',
        company: 'Siemens Corporate Technology',
        position: 'Algorithms & Software Developer',
        duration: 'August 2017 - May 2018',
        description: [
            'Built a web application to enable graphical SCL source code manipulation using abstract syntax trees.',
            'Engineered backend systems to model energy infrastructures using Python and MATLAB.',
            'Designed and implemented a communication interface to connect components of a project developed using various technologies (Node.JS, Python, C#, C++).',
            'Developed real time applications for the PLC 1500 platform using Siemen\'s S7 Protocol and TIA Portal.',
            'Implemented Docker services to automate build processes and to bundle components into a singular package.'
        ],
        tools: ['C', 'C++', 'Python', 'Javascript', 'SCL', 'Docker']
    },
    {
        url: 'images/walkthru.png',
        color: '#38425D',
        company: 'WalkThru, Inc.',
        position: 'Software Engineering Intern',
        duration: 'June 2017 - August 2017',
        description: [
            'Developed and maintained integration of Salesforce, SAP, Oracle, and other industry leading SaaS applications.',
            'Implemented a classifier using historical client data to automatically refactor a WalkThru onto an updated website.'
        ],
        tools:['Javascript', 'NodeJS', 'SQL', 'Python', 'Pytorch']
    },
    {
        url: 'images/rutgers.png',
        color: '#990000',
        company: 'Enterprise Application Services',
        position: 'Student Developer',
        duration: 'June 2016 - May 2017',
        description: [
            'Developed and maintained the instructional application Sakai within Rutgers.',
            'Contributed bug fixes and feature implementations to the open-source Sakai community.',
            'Created tools for administrative \& technical use within the office using Java and the Spring Framework'
        ],
        tools: ['Java', 'Python', 'Javascript', 'Spring Framework']
    },
    {
        url: 'images/infoseeking.png',
        color: '#343a40',
        company: 'InfoSeeking Labs',
        position: 'Android Developer',
        duration: 'October 2015 - March 2016',
        description: [
            'Developed an Android client to access the research collaboration service built by InfoSeeking Labs through a RESTful API built on PHP.',
            'Worked with the Android Compat library to enable support for the app across different Android versions.'
        ],
        tools: ['Java', 'Android SDK', 'PHP']
    }
]

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    render() {
        const {
            url, 
            color,
            company,
            position,
            duration,
            description,
            tools
        } = this.props

        return (
            <React.Fragment>
                <Card text="white" style={{
                    width: "325px",
                    backgroundColor: color,
                    backgroundImage: `url('${url}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "95% 90%",
                    backgroundSize: "25%",
                    margin: "0 10px 20px 10px",
                    flexGrow: "1"
                }} onClick={() => this.setState({show: true})}>
                    <Card.Body>
                        <Card.Title>{company}</Card.Title>
                        <Card.Subtitle className="mb-2">{position}</Card.Subtitle>
                        <Card.Text>{duration}</Card.Text>
                        <Card.Link style={{
                            color: "white",
                            textDecoration: 'underline',
                            textUnderlinePosition: "under"
                        }}>Learn More</Card.Link>
                    </Card.Body>
                </Card>
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                    centered
                    aria-labelledby={`${company.replace(" ", "-").toLowerCase()}-dialog`}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id={`${company.replace(" ", "-").toLowerCase()}-dialog-title`}>
                            {company}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>{position}</h5>
                        <h6>{duration}</h6>
                        <ul className="pl-3 pt-3 pb-3">
                            {description.map(
                                (item, index) => <li key={index}>{item}</li>
                            )}
                        </ul>
                        <Row noGutters>
                            {tools.map(
                                (item, index) => <Badge key={index} pill className="mr-2 mt-1" variant="info">{item}</Badge>
                            )}
                        </Row>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }
}

export class ExperienceComponent extends React.Component {
    render() {
        return (
            <Container>
                <br/>
                <Row noGutters>
                    <h1>Past Work Experience</h1>
                </Row>
                <hr/>
                <Row style={{justifyContent: "space-around"}}>
                    {EXPERIENCE_DATA.map(experience => (
                        <ExperienceCard key={experience.company} {...experience} />
                    ))}
                </Row>
                <br />
            </Container>
        );
    }
}
