import React from 'react';
import './style.css';
import ReCAPTCHA from 'react-google-recaptcha';
require('dotenv').config();


const Contact = () => {
    const [status, setStatus] = React.useState("Submit");
    const [captchaStatus, setCaptchaStatus] = React.useState(false)

    const handleSubmit = async (e) => {
        console.log(captchaStatus)
        e.preventDefault();
        if (captchaStatus === true) {
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
            if(result.status === 'Message Sent'){
                return window.location.assign('/Contact')
            }
        } else if (captchaStatus === false) {
            alert(`Please verify you're not a robot.`)
        }

    }

    return (
        <div className="row my-5 inputcontainer d-flex justify-content-around">
            <div className="row my-5 text-center d-flex justify-content-around" id="iconlist">
                <a className="col-sm-11 mb-3" href="https://www.linkedin.com/in/jeremy-joanet-1a3a2a204/" rel="noreferrer" target="_blank"><img id="linkedinicon" src="Linkedin.png" alt="Linkedin" /></a>
                <a className="col-sm-11 mb-4" id="email" href="mailto:jeremyjoanet@protonmail.com?subject=Email from Portfolio"><h1>JeremyJoanet@protonmail.com</h1></a>
                <a className="col-sm-11" href="https://github.com/Vygoth" rel="noreferrer" target="_blank"><img id="githubicon" src="GithubIconProfile.png" alt="Github" /></a>
            </div>
            <div className="row">
                <div>
                    <form onSubmit={handleSubmit}>
                    <div className="mx-3 mb-3">
                        <span className="input-group-text descriptor">First and last name</span>
                        <input id="first_name"
                                placeholder="First Name" 
                                type="text" 
                                aria-label="First name" 
                                className="form-control inputfield"/>
                        <input id="last_name"
                                placeholder="Last Name" 
                                type="text" 
                                aria-label="Last name" 
                                className="form-control inputfield"/>
                    </div>
                    <div className="mx-3 mb-3">
                        <span className="input-group-text descriptor" id="inputGroup-sizing-default">Phone:</span>
                        <input type="number"
                                placeholder="(000) 000-0000"
                                id="phone_number" 
                                className="form-control inputfield" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="mx-3 mb-3">
                        <span className="input-group-text descriptor" id="inputGroup-sizing-default">Email:</span>
                        <input type="text" 
                                id="user_email"
                                placeholder="Example@Email.com"
                                className="form-control inputfield" 
                                aria-label="Sizing example input" 
                                aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="mx-3 mb-3">
                        <span className="input-group-text descriptor">Message:</span>
                        <textarea className="form-control inputfield"
                                    placeholder="Your message here!"
                                    id="message" 
                                    aria-label="With textarea"></textarea>
                    </div>
                    <div className="d-flex justify-content-around row">
                        <div className="col-sm-11 mb-3" id="captchaBox">
                            <ReCAPTCHA
                                sitekey="6LfW3VcbAAAAAE90mO5idWzb3KwL5EQ9u5ZlKJ_A"
                                onChange={() => setCaptchaStatus(true)}
                            />
                        </div>
                        <button type="submit" className="btn submitbtn col-sm-11">{status}</button>
                    </div>
                    </form>
                </div>
            </div>
                </div>
    )
}

export default Contact;