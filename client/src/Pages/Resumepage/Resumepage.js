import React, { useEffect } from 'react';
import './style.css';

function Resume() {

    const [pageRendered, setPageRendered] = React.useState(false);

    let resumecontainer = (<h1 className="text-center">Loading Resume...</h1>);

    useEffect(() => {
        setPageRendered(true)
    }, [])

    if(pageRendered) {
        resumecontainer = (
            <div id="resumecontainer" className="my-5">
                <object data="./JeremyJoanetResumePortfolio.pdf" type="application/pdf" width="100%" height="100%">
                    <h1 className="text-center">Looks like the embeded PDF failed to render, sorry about that!</h1>
                </object>
            </div>
        )
    }

    return (
        <div>{resumecontainer}</div>
    )
}

export default Resume;