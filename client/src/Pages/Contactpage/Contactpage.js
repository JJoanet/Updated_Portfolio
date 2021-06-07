import React from 'react';
import './style.css';

function Resume() {
    return (
        <div className="row">
            <div className="col-sm-12 my-5 text-center d-flex justify-content-around" id="iconlist">
                <a href="" rel="noreferrer" target="_blank"><img className="col-sm-12 col-md-3" id="emailicon" src="Email_Icon.png"  alt="Email"/></a>
                <a href="" rel="noreferrer" target="_blank"><img className="col-sm-12 col-md-3" id="linkedinicon" src="Linkedin.png"  alt="Linkedin"/></a>
                <a href="" rel="noreferrer" target="_blank"><img className="col-sm-12 col-md-3" id="githubicon" src="GithubIconProfile.png"  alt="Github"/></a>
            </div>
        </div>
    )
}

export default Resume;