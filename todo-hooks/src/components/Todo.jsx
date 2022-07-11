import Styles from "./todo.module.css"

export const Todo = ({todo, deleteTodo,markAsCompleted, setModal})=>{

    const editTodo = ()=>{
        setModal(prev=>{
            return {
                visible: !prev.visible,
                todo: todo
            }
        })
    }

    return <div className={Styles.todo}>
    <p onClick={()=>markAsCompleted(todo)} style={{textDecoration: todo.data.completed ? "line-through" : "none"}}>{todo.data.content}</p>
    <div>
    <div onClick={()=>deleteTodo(todo.id)}>
    <ion-icon name="trash-outline"></ion-icon>
    </div>
    <div onClick={editTodo}>
    <ion-icon name="pencil-outline"></ion-icon>
    </div>
    </div>
  </div>
}