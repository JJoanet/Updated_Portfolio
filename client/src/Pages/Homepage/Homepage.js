import React, { useEffect } from 'react';
import './style.css';

function Home() {
    const [skillList, setSkillList] = React.useState([])

    useEffect(() => {
        const skillList = [

            {
                logo: "./HTMLLogo.png",
                description: "HTML 5"
            },
            {
                logo: "./CSSLogo.png",
                description: "CSS 3"
            },
            {
                logo: "./JavascriptLogo.png",
                description: "JavaScript"
            },
            {
                logo: "./MySQLLogo.png",
                description: "MySQL"
            },
            {
                logo: "./MongoDBLogo.png",
                description: "Mongo DB"
            },
            {
                logo: "./NodeLogo.png",
                description: "Node js"
            }
        ]

        setSkillList(skillList)

    }, [])



    return (
        <div id="homepage row">
            <div className="imagebackground my-5">
                <div className="px-2 py-2">
                    <img className="image col-sm-12" src="./Jeremy.png" class="card-img" alt="..." />
                </div>
            </div>
            <div className="row my-5 text-center d-flex justify-content-around" id="iconlist">
                <a className="col-sm-11 col-md-3" href="https://www.linkedin.com/in/jeremy-joanet-1a3a2a204/" rel="noreferrer" target="_blank"><img id="linkedinicon" src="Linkedin.png" alt="Linkedin" /></a>
                <a className="col-sm-11 mb-4" id="email" href="mailto:jeremyjoanet@protonmail.com?subject=Email from Portfolio"><h1>JeremyJoanet@protonmail.com</h1></a>
                <a className="col-sm-11 col-md-3" href="https://github.com/JJoanet" rel="noreferrer" target="_blank"><img id="githubicon" src="GithubIconProfile.png" alt="Github" /></a>
            </div>
            <div className="card homebio">
                <div className="card-body">
                    I've always had an interest in computers, my earliest passion and my most prominent one. I've fixed them, built them and gamed on them for most of my life; 
                    however I never thought I would get the opportunity to turn that passion into a career. As a full stack web developer I don't only utilize that passion, but also the experience from
                    decades of troubleshooting with an inquisitive mind. A natural perfectionist, I take on every project as a personal challenge to rise above both my expectations, and my definition of success.
                    My goal in this field is the philosophy I carry in every aspect of life; stagnation is the death of creativity. Never stop learning, never stop trying, and do your absolute best every step of the way.
                </div>
            </div>
            <div className="row col-sm-11 my-5 main-skill-container">
                {skillList.map(skill => (
                        <div className="col-sm-6 col-md-4 mb-3 align-self-center">
                            <img src={skill.logo} className="card-img-top skill-image" alt={skill.description} />
                            <div className="card-body description-container">
                                <p className="card-text skill-description "><h1>{skill.description}</h1></p>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Home;