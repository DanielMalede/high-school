import Student from './Student.component'
import Students from './Students.component'
import StudentTable from './StudentTable.component'
export default function PrintWelcome(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <StudentTable/>
            <Student F_name="Lior" L_name="Dawit" MyDate="1997-05-20" Pic="logo192.png"/>
            <Students/>
        </div>
    )
    
}