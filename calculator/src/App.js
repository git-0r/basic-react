import './App.css';
import {Component} from "react";

class App extends Component{
  constructor(){
    super();
    this.state = {defaultValue: 0}
  }

  this
  render(){
    return <main className='calculator'>
      <div className='result'>{this.state.defaultValue}</div>
      <div className='keys'>
      <div className='key'>(</div>
      <div className='key'>CE</div>
      <div className='key'>)</div>
      <div className='key'>C</div>
      <div className='key'>1</div>
      <div className='key'>2</div>
      <div className='key'>3</div>
      <div className='key'>+</div>
      <div className='key'>4</div>
      <div className='key'>5</div>
      <div className='key'>6</div>
      <div className='key'>-</div>
      <div className='key'>7</div>
      <div className='key'>8</div>
      <div className='key'>9</div>
      <div className='key'>*</div>
      <div className='key'>.</div>
      <div className='key'>0</div>
      <div className='key'>=</div>
      <div className='key'>/</div>
      </div>
    </main>
  }
}

export default App;
