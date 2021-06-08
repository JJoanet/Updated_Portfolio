import React, { useEffect } from 'react';
import './style.css';

function Projectlist() {
    const [projectList, setProjectList] = React.useState([])
    const [featuredProject, setFeaturedProject] = React.useState({})

    useEffect(() => {
        const allProjects = [
            {
                name: "Unify",
                liveurl: "https://vygoth.github.io/Unify/",
                sourceurl: "https://github.com/Vygoth/Unify",
                description: `Serving as the project manager for this application, it was built as a proof-of-concept to help bridge workers with unions. 
                It utilizes multiple API’s, including Google Maps, a Google scraper, and a geolocator. 
                We built this using Materialize for our CSS and jQuery for our JavaScript.  We were able to complete our concept build in 5 days, start to finish. Note:
                API keys are not linked on this deployed site for security purposes.
                `,
            },
            {
                name: "Rate My Workplace",
                liveurl: "https://rate-my-workplace.herokuapp.com/",
                sourceurl: "https://github.com/melanieuhrich/Rate-My-Workplace",
                description: `Again, serving as project manager, we completed this project by our deadline of 4 days. 
                This application was built to allow employees to rate their workplaces based on safety criteria. 
                It was built using a Model-View-Controller design, to dynamically create web pages utilizing handlebars. 
                Data from this site is stored with Jaws on Heroku, or locally with MySQL. We decided to use non environment variable storage with dotenv, 
                server management with Express, database management with Sequelize, and password encryption with bcrypt.`,
            },
            {
                name: "Tech Blog",
                liveurl: "https://blog-site-14.herokuapp.com/",
                sourceurl: "https://github.com/Vygoth/14-Tech-Blog",
                description: `A nifty little blog site, users can create accounts, make posts, comment on other posts and see their posts on their account dashboard.`,
            },
            {
                name: "Password Generator",
                liveurl: "https://vygoth.github.io/Password-Generator/",
                sourceurl: "https://github.com/Vygoth/Password-Generator",
                description: `A password generator! Creates a random string of characters based on user selection for a random password.`,
            },
            {
                name: "Readme Generator",
                liveurl: "https://github.com/Vygoth/ReadMeGenerator",
                sourceurl: "https://github.com/Vygoth/ReadMeGenerator",
                description: `A command line application that allows users to easily create a Readme after a series of inquirer prompts.`,
            },
            {
                name: "Weather Dashboard",
                liveurl: "https://vygoth.github.io/Weather-Dashboard/",
                sourceurl: "https://github.com/Vygoth/Weather-Dashboard",
                description: `A handy little weather tracker that utilizes Open Weather's API to allow users to search by city name, 
                and receive the forecast for the current day, plus a 5 day future forecast. Previous city searches are saved for future use.`,
            },
            {
                name: "Work Day Scheduler",
                liveurl: "https://vygoth.github.io/Work-Day-Scheduler/",
                sourceurl: "https://github.com/Vygoth/Work-Day-Scheduler",
                description: `This application allows users to save notes for each hour of their work day, 
                it also tracks the current time to color coat time blocks if the associated block's 
                time has passed, is current, or has yet to pass.`,
            },
            {
                name: "Fitness Tracker",
                liveurl: "https://northwestern-fitness-tracker.herokuapp.com/",
                sourceurl: "https://github.com/Vygoth/Fitness_Tracker",
                description: `This application allows users to add completed exercises to a saved workout. 
                This saved workout will tally up their workout's duration, the amount of exercises performed, the total weight lifted, total sets and total reps. 
                Users can then view the dashboard to see their total weight and duration tracked over time.`,
            },
        ]
        setProjectList(allProjects)
        const featuredProject = {
            name: "Stage Coach",
            liveurl: "http://www.google.com",
            sourceurl: "www.google.com",
            description: `This application was created to help bridge the gap between small musical venues and local artists. 
            It was built using React, MySQL, Node, Express, and dotenv. This application utilizes an MVC structure to render database calls 
            and dynamically display react pages and components. 
            Data from this site is stored with Jaws on Heroku. This application features user password encryption with bcrypt.`
        }
        setFeaturedProject(featuredProject)
    }, [])

    return (
        <div className ="row projectcontainer">
            <div className="card my-5 col-sm-11" id="featured">
                <div className="row g-0">
                    <div className="col-md-11 text-center textblock my-3">
                        <div className="card-body">
                            <h5 className="card-title">{featuredProject.name}</h5>
                            <p className="card-text">{featuredProject.description}</p>
                            <div className="linkblock my-5">
                                <a href={featuredProject.liveurl} rel="noreferrer" target="_blank"><img className="liveicon mx-2" src="LiveIcon.png"  alt="Live Deployed Link"/></a>
                                <a href={featuredProject.sourceurl} rel="noreferrer" target="_blank"><img className="codeicon mx-2" src="GithubIcon.png"  alt="Source Code Link"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {projectList.map(project => (
                <div className="card mb-5 col-sm-11 col-xl-5" id="tertiary">
                    <div className="row g-0">
                        <div className="col-md-11 text-center textblock my-2">
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text">{project.description}</p>
                                <div className="linkblock">
                                    <a href={project.liveurl} rel="noreferrer" target="_blank"><img className="liveicon mx-2" src="LiveIcon.png"  alt="Live Deployed Link"/></a>
                                    <a href={project.sourceurl} rel="noreferrer" target="_blank"><img className="codeicon mx-2" src="GithubIcon.png"  alt="Source Code Link"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Projectlist;

