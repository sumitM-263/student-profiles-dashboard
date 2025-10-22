import StudentCard from "./StudentCard";
import { students } from "./students"
import "./App.css"

export default function App() {

    return (
        <>
            <h2>Student Profile Dashboard</h2>
            <div className="container">

                {
                    students.map(student => (
                        <StudentCard key={student.id} name={student.name} course={student.course} image={student.image} description={student.description} />
                    ))
                }
            </div>
        </>
    )
}