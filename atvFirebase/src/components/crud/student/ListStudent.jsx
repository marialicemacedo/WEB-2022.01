import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentTableRow from "./StudentTableRow";
import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseStudentService from "../../../services/FirebaseStudentService";

const ListStudentPage = () =>
<FirebaseContext.Consumer>
    {
        (value) => <ListStudent firebase={value} />
    }
</FirebaseContext.Consumer>

function ListStudent(props) {

    const [students, setStudents] = useState([])

    useEffect(        
        ()=>{
          /*axios.get('http://localhost:3002/crud/student/list')
          .then(
              (response)=>{
                setStudents(response.data)
              }
          )
          .catch(error=>console.log(error))
          */
          FirebaseStudentService.list_onSnapshot(
            props.firebase.getFirestoreDb(),
            (students)=>{
                //console.log(students)
                setStudents(students)
            }
        )
        },
        []
    )

    function deleteStudentById(_id){
        let studentsTemp = students
        for(let i=0;i<studentsTemp.length;i++){
            if(studentsTemp[i]._id === _id){
                studentsTemp.splice(i,1)
            }
        }
        setStudents([...studentsTemp])
    }

    function generateTable() {
        if(!students) return
        return students.map(
            (student,i) => {
                return <StudentTableRow 
                    student={student} 
                    key={i} 
                    deleteStudentById={deleteStudentById}
                    firestore = {props.firebase.getFirestoreDb()}
                    />
            }
        )
    }

    return (
        <>
            <main>
                <h2>
                    Listar Estudantes
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan={2} style={{ textAlign: "center" }}></th>
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

export default ListStudentPage 