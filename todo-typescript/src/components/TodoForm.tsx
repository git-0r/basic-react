import { addDoc , serverTimestamp, collection} from 'firebase/firestore';
import { SyntheticEvent } from 'react';
import { db } from '../firebase';
import Styles from "./todo-form.module.css";
import React from "react";

export const TodoForm = ()=> {
    const createTodo = (e: SyntheticEvent)=>{
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const newTodo = {
            content: target.content.value,
            completed: false,
            timestamp: serverTimestamp()
        }
        addDoc(collection(db,'todo'),newTodo);
        target.content.value = "";
    }
    return <form onSubmit={createTodo} className={Styles.todoForm}> 
        <input required placeholder="What needs to be done?" name="content"/>
        <button>Create</button>
    </form>
}