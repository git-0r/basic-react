import logo from './logo.svg';
import './App.css';

function App() {
  const dateToday = Date();

  return (
    <div className="App">
     <h1>Date is: {dateToday}</h1>
    </div>
  );
}

export default App;
