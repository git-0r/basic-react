import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const hour = new Date().getHours();
  const [color, setColor] = useState("black");

  return (
    <div className="App">
      <header className="App-header">
        {
          hour > 8  && hour < 12 
          ? <h1 style={{color: "green"}}>"Good Morning from React. You are having coffee with me."</h1>
: hour >= 12 && hour < 18
? <h1 style={{color: "blue"}}>"Good Afternoon from React. Wanna lunch with me." </h1>
: <h1>"Good night from React. Lets drink together."</h1>
        }
      </header>
    </div>
  );
}

export default App;
