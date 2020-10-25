import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {IntroComponent} from "./Intro.jsx";
import {EducationComponent} from "./Education.jsx";
import {ExperienceComponent} from "./Experience.jsx";
import {ProjectsComponent} from "./Projects.jsx";
import Container from 'react-bootstrap/Container'

ReactDOM.render(
  <React.StrictMode>
    <IntroComponent/>
    <ExperienceComponent/>
    <EducationComponent/>
    <ProjectsComponent/>
    <Container fluid style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center", backgroundColor: "#424242", color: "white", paddingTop: "25px", paddingBottom: "25px", textAlign: "center"
    }}>
        <span>Copyright &copy; 2019 Yash Shah. &nbsp;</span>
        <span>Created Using ReactJS + Bootstrap.</span>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
