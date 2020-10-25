import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class EducationComponent extends React.Component {
    render() {
        return (
            <Container>
                <br/>
                <Row noGutters>
                    <h1>Education</h1>
                </Row>
                <hr/>
                <Col style={{
                    backgroundImage: `url('images/ru_logo.png')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "10%",
                    paddingLeft: "0",
                    paddingRight: "0px"
                }}>
                    <h2><a style={{color: "black"}} href="http://soe.rutgers.edu/">Rutgers University</a></h2>
                    <h4>B.S. in Computer Engineering</h4>
                    <h6>Minor in Computer Science & Entrepreneurship</h6>
                    <p className="mb-0"><u>Relevant Coursework</u>: </p>
                    <Row noGutters style={{
                        paddingRight: "10%"
                    }}>
                        <a href="https://www.ece.rutgers.edu/14332472-introduction-robotics-and-computer-vision">Robotics & Computer Vision</a>,&nbsp;
                        <a href="https://www.cs.rutgers.edu/courses/introduction-to-artificial-intelligence-01198440">Artificial Intelligence</a>,&nbsp;
                        <a href="https://www.ece.rutgers.edu/14332424-introduction-information-and-network-security">Information & Network Security</a>,&nbsp;
                        <a href="https://www.cs.rutgers.edu/courses/systems-programming">Systems Programming</a>,&nbsp;
                        <a href="https://www.cs.rutgers.edu/courses/operating-systems-design-01198416">Operating Systems</a>,&nbsp;
                        <a href="https://www.ece.rutgers.edu/14332437-digital-systems-design">Digital System Design</a>,&nbsp;
                        <a href="http://www.ece.rutgers.edu/14332331-computer-architecture-and-assembly-language">Computer Architecture</a>,&nbsp;
                        <a href="https://www.cs.rutgers.edu/course/data-structures">Data Structures</a>,&nbsp;
                        <a href="https://www.ece.rutgers.edu/14332366-digital-electronics">Digital Electronics</a>,&nbsp;                        
                        <a href="https://www.ece.rutgers.edu/14332361-electronic-devices">Electronic Devices</a>,&nbsp;
                        <a href="www.ece.rutgers.edu/14332231-digital-logic-design">Digital Logic Design</a>,&nbsp;
                        <a href="http://www.ece.rutgers.edu/14332222-principles-electrical-engineering-ii">Principles of EE I&II</a>,&nbsp;
                        <a href="http://www.ece.rutgers.edu/14332345-linear-systems-and-signals">Signals & Systems</a>,&nbsp;
                        <a href="https://www.cs.rutgers.edu/courses/introduction-to-discrete-structures-i">Discrete Structures</a>,&nbsp;
                        <a href="https://www.math.rutgers.edu/academics/undergraduate/courses/948-01-640-250-introductory-linear-algebra">Linear Algebra</a>,&nbsp;
                        <a href="https://www.math.rutgers.edu/academics/undergraduate/courses/947-01-640-244-differential-equations-for-engineering-and-physics">Differential Equations</a>
                    </Row>
                </Col>
                <br />
            </Container>
        );
    }
}
