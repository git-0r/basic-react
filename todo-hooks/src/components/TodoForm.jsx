import { addDoc , serverTimestamp, collection} from 'firebase/firestore';
import { db } from '../firebase';
import Styles from "./todo-form.module.css";

export const TodoForm = ({setList})=> {
    const createTodo = (e)=>{
        e.preventDefault();
        const newTodo = {
            content: e.target[0].value,
            completed: false,
            timestamp: serverTimestamp()
        }
        addDoc(collection(db,'todo'),newTodo);
        e.target[0].value = "";
    }
    return <form onSubmit={createTodo} className={Styles.todoForm}> 
        <input required placeholder="What needs to be done?"/>
        <button>Create</button>
    </form>
}