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