import * as React from "react";
import { Link } from "react-router-dom";

import { professors } from './info.js'
import Professores from "./Professores";

function ListarProfessor() {

    function generateTable() {
        if(!professors) return
        return professors.map(
            (student,i) => {
                return <Professores professor={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                     Professores
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Universidade</th>
                            <th>Titulação</th>
                            <th colSpan={2} style={{textAlign:"center"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateTable()}
                    </tbody>
                </table>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default ListarProfessor