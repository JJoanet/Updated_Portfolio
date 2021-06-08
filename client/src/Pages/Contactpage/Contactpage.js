import React from 'react';
import './style.css';

const Contact = () => {
    const [status, setStatus] = React.useState("Submit");
    const [firstFocused, setFirstFocused] = React.useState(false);
    const [lastFocused, setLastFocused] = React.useState(false);
    const [numberFocused, setNumberFocused] = React.useState(false);
    const [emailFocused, setEmailFocused] = React.useState(false);
    const [messageFocused, setMessageFocused] = React.useState(false);

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
        <div className="row my-5 inputcontainer d-flex justify-content-around">
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
                    <div className="d-flex justify-content-around">
                        <button type="submit" className="btn submitbtn">{status}</button>
                    </div>
                    </form>
                </div>
            </div>
                </div>
    )
}

export default Contact;