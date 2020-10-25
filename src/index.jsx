import React from 'react';
import ReactDOM from 'react-dom';

import {IntroComponent} from "./Intro.jsx";
import {EducationComponent} from "./Education.jsx";
import {ExperienceComponent} from "./Experience.jsx";
import {ProjectsComponent} from "./Projects.jsx";
import Container from 'react-bootstrap/Container'

class IndexComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <IntroComponent/>
                <EducationComponent/>
                <ExperienceComponent/>
                {/* <ProjectsComponent/> */}
                <br />
                <Container fluid style={{
                    display: "flex", flexWrap: "wrap", justifyContent: "center", backgroundColor: "#424242", color: "white", paddingTop: "25px", paddingBottom: "25px", textAlign: "center"
                }}>
                    <span>Copyright &copy; 2020 Yash Shah. &nbsp;</span>
                    <span>Built with React + Bootstrap.</span>
                </Container>
            </React.Fragment>
        );
    }
}

document.querySelector('#first-paint').style.display = "none";
ReactDOM.render(<IndexComponent />, document.querySelector('#react'));