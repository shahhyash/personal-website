import React from 'react';

export class HeaderComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="top">
                    <div id="logo">
                        <span className="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
                        <h1 id="title">Yash Shah</h1>
                        <p>Computer Engineer</p>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li><a href="#intro" id="intro-link" className="skel-layers-ignoreHref"><span className="icon fa-home">Intro</span></a></li>
                            <li><a href="#education" id="education-link" className="skel-layers-ignoreHref"><span className="icon fa-graduation-cap">Education</span></a></li>
                            <li><a href="#experience" id="experience-link" className="skel-layers-ignoreHref"><span className="icon fa-gears">Experience</span></a></li>
                            <li><a href="#projects" id="projects-link" className="skel-layers-ignoreHref"><span className="icon fa-th">Portfolio</span></a></li>
                            <li><a href="#links" id="links-link" className="skel-layers-ignoreHref"><span className="icon fa-link">Links</span></a></li>
                        </ul>
                    </nav>
                </div>

                <div className="bottom">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/shahhyash" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="http://www.facebook.com/yash.shah830" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="http://www.github.com/shahhyash" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:yhs4@rutgers.edu" className="icon fa-envelope"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
