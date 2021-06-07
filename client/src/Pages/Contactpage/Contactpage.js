import React, {component} from 'react';
import './style.css';

const Contact = () => {
    const [status, setStatus] = React.useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { first_name, last_name, user_email, message, phone_number} = e.target.elements;
        let details = {
            first_name: first_name.value,
            last_name: last_name.value,
            user_email: user_email.value,
            phone_number: phone_number.value,
            message: message.value
        };
        let response = await fetch("/Contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    }
    return (
        <div className="row">
            <div className="row my-5 text-center d-flex justify-content-around" id="iconlist">
                <a className="col-sm-11 col-md-3" href="" rel="noreferrer" target="_blank"><img id="emailicon" src="Email_Icon.png" alt="Email" /></a>
                <a className="col-sm-11 col-md-3" href="https://www.linkedin.com/in/jeremy-joanet-1a3a2a204/" rel="noreferrer" target="_blank"><img id="linkedinicon" src="Linkedin.png" alt="Linkedin" /></a>
                <a className="col-sm-11 col-md-3" href="https://github.com/Vygoth" rel="noreferrer" target="_blank"><img id="githubicon" src="GithubIconProfile.png" alt="Github" /></a>
            </div>
            <div className="row">
                <div>
                    <form onSubmit={handleSubmit}>
                    <div clasNames="input-group">
                        <span className="input-group-text">First and last name</span>
                        <input id="first_name" 
                                type="text" 
                                aria-label="First name" 
                                className="form-control"/>
                        <input id="last_name" 
                                type="text" 
                                aria-label="Last name" 
                                className="form-control"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                        <input type="number"
                                id="phone_number" 
                                class="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                        <input type="text" 
                                id="user_email"
                                class="form-control" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group">
                        <span class="input-group-text">With textarea</span>
                        <textarea class="form-control"
                                    id="message" 
                                    aria-label="With textarea"></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary col-sm-10 mx-2 my-2">{status}</button>
                    </form>
                </div>
            </div>
                </div>
    )
}

export default Contact;