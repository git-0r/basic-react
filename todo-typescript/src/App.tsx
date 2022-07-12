import React, { useEffect, useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import {onSnapshot, collection, query, orderBy, deleteDoc, doc, setDoc} from "firebase/firestore";
import {db} from "./firebase";
import { Todo } from './components/Todo';
import { Modal } from './components/Modal'

type todo = {
  id: string,
  data: {
    content: string,
    completed: boolean
  }
}

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState(0);
  const [modal, setModal] = useState({visible: false, todo: {id: "", data: {content: "", completed: false}}});

  
  useEffect(() => {
    const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));
    onSnapshot(q,(snapshot: any)=>{
    setList(snapshot.docs.map((doc: any) => ({id: doc.id, data: doc.data()})));
    })
    },[]
  );
  
  const markAsCompleted = (todo: {id: string; data: {content: string, completed: boolean}})=>{
    setDoc(doc(db, "todo", todo.id), {...todo.data, completed: !todo.data.completed});
  }

  const deleteTodo = (id: string)=>{
    deleteDoc(doc(db, "todo", id))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
    <TodoForm/>
    <div className='filter-btns'>
      <button onClick={()=>setTask(0)}>All</button>
      <button onClick={()=>setTask(1)}>Active</button>
      <button onClick={()=>setTask(2)}>Completed</button>
    </div>
    {
      list.length < 1 
      ? <p>List is empty.</p>
      : task === 1
      ? list.filter((todo: todo)=>!todo.data.completed)
      .map((todo: todo)=><Todo setModal={setModal} key={todo.id} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>)
      : task === 2
      ? list.filter((todo: todo)=>todo.data.completed)
      .map((todo: todo)=><Todo setModal={setModal} key={todo.id} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>)
      : list.map((todo: todo)=><Todo setModal={setModal} key={todo.id} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>)
    }
   {modal.visible && <Modal todo={modal.todo} setModal={setModal}/>}
    </div>
  );
}

export default App;
