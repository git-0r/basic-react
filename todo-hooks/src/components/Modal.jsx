import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Styles from "./modal.module.css";

export const Modal = ({todo, setModal})=>{
    const closeModal = ()=>{
        setModal(prev=>({visible: !prev.visible, todo: null}))
    }

    const updateTodo =(e)=>{
        e.preventDefault();
        setDoc(doc(db, "todo", todo.id), {...todo.data, content: e.target[0].value});
        closeModal();
    }

    return <main className={Styles.modal}>
        <h1>Edit todo</h1>
        <form onSubmit={updateTodo} className={Styles.modalForm}>
            <input required defaultValue={todo.data.content}/>
            <button>Update</button>
        </form>
        <button onClick={closeModal} className={Styles.closeModal}>Close</button>
    </main>
}
