import React, { useState } from "react";
import { Link } from "react-router-dom";
import { students } from "./info";

function CriarAluno() {

    const [name,setName] = useState("")
    const [course,setCourse] = useState("")
    const [ira,setIRA] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        students.push({id: students.length, name, course, ira})
    }

    return (
        <>
            <main>
                <h2>
                    Criar Estudante
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" 
                               className="form-control" 
                               value={(name==null || name===undefined)?"":name}
                               name="name" 
                               onChange={(event)=>{setName(event.target.value)}}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" 
                               className="form-control"
                               value={ira ?? 0}
                               name="ira" 
                               onChange={(event)=>{setIRA(event.target.value)}}/>
                    </div>
                    
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" 
                               className="form-control"
                               value={course ?? ""}
                               name="course" 
                               onChange={(event)=>{setCourse(event.target.value)}}/>
                    </div>
                   
                    <div className="form-group" style={{paddingTop:15}}>
                    <button onClick={'Cadastrado com sucesso'} className="btn btn-primary">
                     Cadastrar
                </button>
                    </div>
               
                
                </form>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default CriarAluno