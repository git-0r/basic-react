import Styles from "./todo.module.css"
import React from "react";

type AppProps = {
    todo: {id: string, data: {completed: boolean, content: string}},
    deleteTodo: (id: string)=> void,
    markAsCompleted: (todo: {id: string, data: {completed: boolean, content: string}})=> void,
    setModal: any
}

    export const Todo = (props: AppProps)=>{

    const editTodo = ()=>{
        props.setModal((prev: {visible: false, todo: {id: "", data: {content: "", completed: false}}})=> {
            return {
                visible: !prev.visible,
                todo: props.todo
            }
        })
    }

    return <div className={Styles.todo}>
    <p onClick={()=>props.markAsCompleted(props.todo)} style={{textDecoration: props.todo.data.completed ? "line-through" : "none"}}>{props.todo.data.content}</p>
    <div className={Styles.modButtons}>
    <div onClick={()=>props.deleteTodo(props.todo.id)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z"/></svg>
    </div>
    <div onClick={editTodo}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 19h1.414l9.314-9.314-1.414-1.414L5 17.586V19zm16 2H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L9.243 19H21v2zM15.728 6.858l1.414 1.414 1.414-1.414-1.414-1.414-1.414 1.414z"/></svg>
    </div>
    </div>
  </div>
}