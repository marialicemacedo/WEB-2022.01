
import * as React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <main>
                <h2>BEM VINDO!</h2>
                <p>Esta é a atividade 02 da disciplina de DeV WEB.</p>
            </main>
            <nav>
                <Link to="/Sobre">Sobre</Link>
            </nav>
        </>
    );
}