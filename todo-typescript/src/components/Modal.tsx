import { doc, setDoc } from "firebase/firestore";
import { SyntheticEvent } from "react";
import { db } from "../firebase";
import Styles from "./modal.module.css";
import React from "react";

type AppProps = {
    todo: {id: string, data: {completed: boolean, content: string}},
    setModal: any
}
export const Modal = (props: AppProps)=>{
    const closeModal = ()=>{
        props.setModal((prev: {visible: boolean, todo: {id: string, data: {content: string, completed: boolean}}})=>({visible: !prev.visible, todo: null}))
    }

    const updateTodo =((e: SyntheticEvent)=>{
        
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        setDoc(doc(db, "todo", props.todo.id), {...props.todo.data, content: target.content.value});
        closeModal();
    })

    return <main className={Styles.modal}>
        <h1>Edit todo</h1>
        <form onSubmit={updateTodo} className={Styles.modalForm}>
            <input required defaultValue={props.todo.data.content} name="content"/>
            <button>Update</button>
        </form>
        <button onClick={closeModal} className={Styles.closeModal}>Close</button>
    </main>
}
