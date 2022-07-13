import { Component } from "react";
import "./App.css";
import { Form1 } from "./components/Form1";
import { Form2 } from "./components/Form2";
import { Form3 } from "./components/Form3";

class App extends Component{
  
  componentDidMount() {
    document.title = "Forms"  
  }

  render() {
    return <div className="App">
      <header className="App-header">
        <h1>Form Assignment</h1>
      </header>
      <Form1 />
      <Form2 />
      <Form3/>
    </div>
  };
}

export default App;
