import { Component } from "react";
// import Student from "./Student.component";

export default class students extends Component {
    constructor(props){
        super()
    }
  render() {
    return (
      <div>
        {
        StudentsArray.map((studentItem)=>{
        return(
            <div>
            <p>{studentItem.F_name}</p>
            <p>{studentItem.L_name}</p>
            <p>{studentItem.MyDate}</p>
            <img src={studentItem.Pic} alt=""/>
            <br></br>
            </div>
        )
        })}
      </div>
    );
  }
}
const StudentsArray = [
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

