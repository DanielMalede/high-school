import { Component } from "react";
// import {StudentsArray} from './Students.component'
export default class StudentTable extends Component{
    render(){
        return(
            <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>B-date</th>
                <th>Pic</th>
            </thead>
            <tbody>
                {
                StudentsArrayy.map(studentItem =>(
                        <tr>
                            <td>{studentItem.F_name}</td>
                            <td>{studentItem.L_name}</td>
                            <td>{studentItem.MyDate}</td>
                            {/* <td><img src={studentItem.Pic}/></td> */}
                        </tr>
                ))
                }
            </tbody>
            </table>
        )
    }
}
const StudentsArrayy = [
    {
      F_name: "Lior",
      L_name: "Dawit",
      MyDate: "1997-05-20",
      Pic: "logo192.png",
    },
    {
      F_name: "daniel",
      L_name: "malede",
      MyDate: "1997-05-20",
      Pic: "images/morty.jpg",
    },
    {
      F_name: "yosef",
      L_name: "bakala",
      MyDate: "1997-05-20",
      Pic: "images/morty.jpg",
    },
    {
      F_name: "gad",
      L_name: "dam",
      MyDate: "1997-05-20",
      Pic: "images/morty.jpg",
    },
    {
      F_name: "what",
      L_name: "Dawit",
      MyDate: "1997-05-20",
      Pic: "images/morty.jpg",
    },
  ];