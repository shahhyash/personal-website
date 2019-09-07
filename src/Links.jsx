import React from 'react';

export class LinksComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <header>
                    <h2>Links</h2>
                </header>
                <p>Click on a link to reach out to me or find out more about me!</p>
                <a href="/assets/files/resume.pdf" className="button">
                        <div className="icon fa-file-text">Resume</div>
                </a>
                <a href="mailto:yhs4@rutgers.edu" className="button margintop">
                        <div className="icon fa-envelope">Email</div>
                </a>
                <a href="https://www.linkedin.com/in/shahhyash" className="button margintop">
                        <div className="icon fa-linkedin">LinkedIn</div>
                </a>
                <a href="http://www.github.com/shahhyash" className="button margintop">
                        <div className="icon fa-github">Github</div>
                </a>
            </div>
        );
    }
}
