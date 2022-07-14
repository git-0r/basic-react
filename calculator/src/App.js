import './App.css';
import { Component } from "react";
const initialState = {
  defaultValue: 0,
  firstExpression: null,
  secondExpression: null,
  operator: null,
  result: null,
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState
    }
    this.setKeyValue = this.setKeyValue.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.calculate = this.calculate.bind(this);
    this.reset = this.reset.bind(this);
  }

  setKeyValue(e) {
    const keyValue = e.target.dataset.value;
    if (typeof this.state.operator !== "string" && typeof this.state.secondExpression !== "string") {
      this.setState(prev => ({
        ...prev,
        firstExpression: !prev.firstExpression ? keyValue : prev.firstExpression + keyValue,
      }))
    }
    if (typeof this.state.firstExpression === "string" && typeof this.state.operator === "string") {
      this.setState(prev => ({
        ...prev,
        secondExpression: !prev.secondExpression ? keyValue : prev.secondExpression + keyValue,
      }))

    }
  }

  setOperator(e) {
    const keyValue = e.target.dataset.value;
    if (typeof this.state.firstExpression === "string"
      && typeof this.state.secondExpression !== "string"
      && this.state.operator !== keyValue) {
      this.setState(prev => ({
        ...prev,
        operator: keyValue,
      }))
    }

    if (typeof this.state.result === "number") {
      this.setState(prev => ({
        ...prev,
        operator: keyValue,
        firstExpression: prev.result.toString(),
        secondExpression: null,
      }))
    }

  }

  calculate() {
    if (typeof this.state.firstExpression === "string"
      && typeof this.state.operator === "string"
      && typeof this.state.secondExpression === "string") {

      switch (this.state.operator) {
        case "+":
          this.setState(prev => ({
            ...prev,
            result: Number(prev.firstExpression) + Number(prev.secondExpression)
          }))
          break;
        case "-":
          this.setState(prev => ({ ...prev, result: Number(prev.firstExpression) - Number(prev.secondExpression) }))
          break;
        case "*":
          this.setState(prev => ({ ...prev, result: Number(prev.firstExpression) * Number(prev.secondExpression) }))
          break;
        case "/":
          this.setState(prev => ({ ...prev, result: Number(prev.firstExpression) / Number(prev.secondExpression) }))
          break;
        default:
          break;
      }
    }
  }

  reset() {
    this.setState(initialState);
  }

  render() {
    return <>
      <h1>Calculator</h1>
      <main className='calculator'>
        <div className='result'>{
          this.state.firstExpression && this.state.operator && this.state.secondExpression
            ? this.state.firstExpression + this.state.operator + this.state.secondExpression
            : this.state.firstExpression && this.state.operator
              ? this.state.firstExpression + this.state.operator
              : this.state.firstExpression
                ? this.state.firstExpression
                : this.state.defaultValue
        }</div>
        <div className='result'>{typeof this.state.result === "number" ? this.state.result.toFixed(2) : this.state.defaultValue}</div>

        <div className='keys'>
          <div className='key' onClick={this.setKeyValue} data-value="1">1</div>
          <div className='key' onClick={this.setKeyValue} data-value="2">2</div>
          <div className='key' onClick={this.setKeyValue} data-value="3">3</div>
          <div className='key' onClick={this.setOperator} data-value="+">+</div>
          <div className='key' onClick={this.setKeyValue} data-value="4">4</div>
          <div className='key' onClick={this.setKeyValue} data-value="5">5</div>
          <div className='key' onClick={this.setKeyValue} data-value="6">6</div>
          <div className='key' onClick={this.setOperator} data-value="*">*</div>
          <div className='key' onClick={this.setKeyValue} data-value="7">7</div>
          <div className='key' onClick={this.setKeyValue} data-value="8">8</div>
          <div className='key' onClick={this.setKeyValue} data-value="9">9</div>
          <div className='key' onClick={this.setOperator} data-value="-">-</div>
          <div className='key' onClick={this.reset}>C</div>
          <div className='key' onClick={this.setKeyValue} data-value="0">0</div>
          <div className='key' onClick={this.setKeyValue} data-value=".">.</div> 
          <div className='key' onClick={this.setOperator} data-value="/">/</div>
          <div className='key calculate' onClick={this.calculate}>=</div>
        </div>
      </main>
    </>
  }
}

export default App;
