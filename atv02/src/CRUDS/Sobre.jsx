import * as React from "react";
import { Link } from "react-router-dom";

function Sobre() {
    return (
        <>
            <main>
                <h2>SOBRE NÓS</h2>
                <p>
                    Somos uma empresa educacional....
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default Sobre