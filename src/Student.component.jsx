import { Component } from "react";
export default class Student extends Component{
    constructor(props){
    super()
    }
    render(){
        return(
        <div>
            <p>{this.props.F_name}</p>
            <p>{this.props.L_name}</p>
            <p>{this.props.MyDate}</p>
            <img src={this.props.Pic} alt="" />
        </div>
        )
    }
}