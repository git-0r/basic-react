import './App.css';
import {Component} from "react";
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';

class App extends Component {

  constructor(){
    super();
    this.state = { todoList: [], filter: "all", modal: {visible: false, todo: null} };
    this.handleTodo = this.handleTodo.bind(this);
    this.markAsComplete = this.markAsComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  handleTodo(e){
    e.preventDefault();
    this.setState(
      {
        ...this.state,
        todoList: [
          ...this.state.todoList, 
          {
            content: e.target[0].value, 
            id: uuidv4(),
            completed: false
          }
        ]
      });
      e.target[0].value = "";
  }

  markAsComplete(id){
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map(todo=>todo.id === id ? {...todo, completed: true} : todo)
    })
  }

  deleteTodo(id){
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo=>todo.id !== id)
    })
  }

  closeModal(){
    this.setState({
      ...this.state,
      modal: {visible: false, todo: null}
    })
  }

  updateTodo(e,id){
    e.preventDefault();
    this.setState({
      ...this.state,
      modal: {visible: false, todo: null},
      todoList: this.state.todoList.map(todo=>todo.id !== id ? todo : {...todo, content: e.target[0].value})
    })
  }

  editTodo(todo){
    this.setState({...this.state, modal: {visible: true, todo}})
  }

  render(){
    return <main className='todo-container'>
      {
      this.state.modal.visible && <div className='modal'>
        <h1>Edit todo</h1>
        <form onSubmit={(e)=>this.updateTodo(e, this.state.modal.todo.id)}>
        <input defaultValue={this.state.modal?.todo?.content}/>
        <button>Update</button>
        </form>
        <button onClick={this.closeModal} className="modal-close-btn">close</button>
      </div>
      }
    <h1 className='heading'>Todo</h1>
    <form onSubmit={this.handleTodo}className="todo-form" >
    <input placeholder='what needs to be done?' required className='todo-input'/>
    </form>
    <div className='btns'>
      <button style={{backgroundColor: this.state.filter === "all" ? "salmon": "white"}} onClick={()=>this.setState({...this.state, filter: "all"})}>All</button>
      <button style={{backgroundColor: this.state.filter === "active" ? "salmon": "white"}} onClick={()=>this.setState({...this.state, filter: "active"})}>Active</button>
      <button style={{backgroundColor: this.state.filter === "completed" ? "salmon": "white"}} onClick={()=>this.setState({...this.state, filter: "completed"})}>Completed</button>
    </div>
    {
      this.state.todoList.length === 0 ? <p className='heading'>Nothing to show!</p>: 
      this.state.filter === "all" ?
      this.state.todoList
      ?.map(todo=><Todo 
        todo={todo} 
        key={todo.id} 
        markAsComplete={this.markAsComplete} 
        deleteTodo={this.deleteTodo} 
        editTodo={this.editTodo}/>
      )
      : this.state.filter === "completed" 
      ? this.state.todoList.filter(todo=>todo.completed).map(todo=>
        <Todo 
        todo={todo} 
        key={todo.id} 
        markAsComplete={this.markAsComplete} 
        deleteTodo={this.deleteTodo} 
        editTodo={this.editTodo}/>)
      : this.state.todoList.filter(todo=>!todo.completed).map(todo=>
        <Todo 
        todo={todo} 
        key={todo.id} 
        markAsComplete={this.markAsComplete} 
        deleteTodo={this.deleteTodo} 
        editTodo={this.editTodo}/>)
    }
    </main>
  }
}

export default App;
