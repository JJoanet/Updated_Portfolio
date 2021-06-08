import React from 'react';
import './style.css';

function Home() {
    return (
        <div id="homepage row">
            <div className="imagebackground my-5">
                <div className="px-2 py-2">
                    <img className="image col-sm-12" src="./Jeremy.png" class="card-img" alt="..." />
                </div>
            </div>
            <div className="row my-5 text-center d-flex justify-content-around" id="iconlist">
                <a className="col-sm-11 col-md-3" href="https://www.linkedin.com/in/jeremy-joanet-1a3a2a204/" rel="noreferrer" target="_blank"><img id="linkedinicon" src="Linkedin.png" alt="Linkedin" /></a>
                <a className="col-sm-11 col-md-3" href="https://github.com/Vygoth" rel="noreferrer" target="_blank"><img id="githubicon" src="GithubIconProfile.png" alt="Github" /></a>
            </div>
            <div className="card homebio">
                <div className="card-body">
                    Born and raised in Chicago, I have walked many miles in many shoes.
                    I have worked in multiple industries including retail, sales, military service, computer repair, construction, and most recently; emergency medicine.
                    I have decided to change careers into programming as it's been an out of reach dream for me for the majority of my still short life.
                    Ambitious and educationally unchained, I plan to grow this career into one I can look back on with pride, and enjoy every step of the way.
                </div>
            </div>
        </div>
    )
}

export default Home;