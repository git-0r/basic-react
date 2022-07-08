import { Component } from "react";

export default class Button extends Component {
    render(){
return <button className="btn" onClick={this.props.action}>{this.props.title}</button>
    }
}