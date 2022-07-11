import { useEffect, useState } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import {onSnapshot, collection, query, orderBy, deleteDoc, doc, setDoc} from "firebase/firestore";
import {db} from "./firebase";
import { Todo } from './components/Todo';
import { Modal } from './components/Modal';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState(0);
  const [modal, setModal] = useState({visible: false, todo: null});

  const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q,(snapshot)=>{
    setList(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})));
    })
    },[]
  );
  
  const markAsCompleted = (todo)=>{
    setDoc(doc(db, "todo", todo.id), {...todo.data, completed: !todo.data.completed});
  }

  const deleteTodo = (id)=>{
    deleteDoc(doc(db, "todo", id))
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
    <TodoForm setList={setList}/>
    <div className='filter-btns'>
      <button onClick={()=>setTask(0)}>All</button>
      <button onClick={()=>setTask(1)}>Active</button>
      <button onClick={()=>setTask(2)}>Completed</button>
    </div>
    {
      list.length < 1 
      ? <p>List is empty.</p>
      : task === 1
      ? list.filter(todo=>!todo.data.completed)
      .map(todo=><Todo setModal={setModal} key={todo.id} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>)
      : task === 2
      ? list.filter(todo=>todo.data.completed)
      .map(todo=><Todo setModal={setModal} key={todo.id} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>)
      : list.map(todo=><Todo setModal={setModal} key={todo.id} todo={todo} markAsCompleted={markAsCompleted} deleteTodo={deleteTodo}/>)
    }
   {modal.visible && <Modal todo={modal.todo} setModal={setModal}/>}
    </div>
  );
}

export default App;
