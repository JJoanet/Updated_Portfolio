import React, { Component } from 'react';
import './style.css';

function Home() {
    return (
        <div id="homepage">
            <div className="image row col-sm-12 col-lg-6">
                <img className="col-sm-12" src="./Jeremy.png" class="card-img" alt="..." />
            </div>
            <br />
            <div className="card row homebio col-sm-12 col-lg-6">
                <div className="card-body homebio">
                    This is some text within a card body.
                </div>
            </div>
        </div>
    )
}

export default Home;