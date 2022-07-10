import React, {Component} from "react";

class Todo extends Component{
    
    render(){
        return <div className='todo'>
        <p
        style={{textDecoration: this.props.todo.completed ? "line-through" : "none"}} 
        onClick={()=>this.props.markAsComplete(this.props.todo.id)} >
        {this.props.todo.completed && <ion-icon name="checkmark-done"></ion-icon> }
        {this.props.todo.content}
        </p>
        <div className='mod-buttons'>
        <button className='delete-button' onClick={()=>this.props.deleteTodo(this.props.todo.id)}>
        <ion-icon name="trash"></ion-icon>
        </button>
        <button className='edit-button' onClick={()=>this.props.editTodo(this.props.todo)}>
        <ion-icon name="pencil"></ion-icon>
        </button>
        </div>
        </div>
    }
}

export default Todo;