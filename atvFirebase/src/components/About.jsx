import * as React from "react";
import { Link } from "react-router-dom";

function About(){
    return(
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    About page
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About