import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import Sobre from "./CRUDS/Sobre";
import CriarAluno from "./CRUDS/CriarAluno";
import ListarAlunos from "./CRUDS/ListarAlunos";
import EditarAluno from "./CRUDS/EditarAluno";
import CriarProfessor from "./CRUDS/CriarProfessor";
import ListarProfessor from "./CRUDS/ListarProfessor";
import EditarProfessor from "./CRUDS/EditarProfessor";


function App() {
  return (

    <div className="container">
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Atividade 02</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Sobre" className="nav-link">Sobre</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Aluno
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="navitem">
                    <Link to="/CriarAluno" className="nav-link">Criar Aluno</Link>
                  </li>
                  <li className="navitem">
                    <Link to="/ListarAlunos" className="nav-link">Listar Alunos</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Professor
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="navitem">
                    <Link to="/CriarProfessor" className="nav-link">Criar Professor</Link>
                  </li>
                  <li className="navitem">
                    <Link to="/ListarProfessor" className="nav-link">Listar Professor</Link>
                  </li>
                </ul>
              </li>
            
            </ul>
          </div>
        </div>
      </nav> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="CriarAluno" element={<CriarAluno />} />
        <Route path="ListarAlunos" element={<ListarAlunos />} />
        <Route path="EditarAluno/:id" element={<EditarAluno />} />
        <Route path="CriarProfessor" element={<CriarProfessor />} />
        <Route path="ListarProfessor" element={<ListarProfessor />} />
        <Route path="EditarProfessor/:id" element={<EditarProfessor />} />
      </Routes>
    </div>

  );
}

export default App