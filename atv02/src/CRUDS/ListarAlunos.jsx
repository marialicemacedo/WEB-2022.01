import * as React from "react";
import { Link } from "react-router-dom";

import Alunos from "./Alunos";
import { students } from './info.js'

function ListarAlunos() {

    function generateTable() {
        if(!students) return
        return students.map(
            (student,i) => {
                return <Alunos student={student} key={i} />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Alunos
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
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

export default ListarAlunos