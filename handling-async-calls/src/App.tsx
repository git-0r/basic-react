import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Handling async calls</p>
        </header>
        <Form />
      </div>
  );
}

export default App;
