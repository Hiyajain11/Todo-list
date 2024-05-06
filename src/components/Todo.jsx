import { ImCross } from "react-icons/im";
import styles from "./Todo.module.css";
import { useState } from "react";
import EditTodo from "./EditTodo";
import {MdEdit} from "react-icons/md";

function Todo({ todo,deleteTodo,toggleCompleted,updateTitle }) {
  const[isUpdateMode, setIsUpdateMode]=useState(false);
  function handleDelete(){
    deleteTodo(todo.id);
  }
  function handleToggle(){
    toggleCompleted(todo.id);
  }

  if(isUpdateMode){
    return( <EditTodo id={todo.id} updateTitle={updateTitle} setIsUpdateMode={setIsUpdateMode} title={todo.title}/>
 ); }
 
    return (
      <div className={styles.todo}>
    
        <h3 className={todo.completed ? styles.completed : ""}>{todo.title}</h3>
        <div className={styles.buttonContainer}>
        <span onClick={()=>setIsUpdateMode(true)} className={styles.btn}><MdEdit/></span>
        <input type="checkbox" name="todo-checkbox" id="todo-checkbox" checked={todo.completed} onChange={handleToggle} className={styles.todoCheckbox}/>
        <span onClick={handleDelete} className={styles.btn}><ImCross/></span>
        {/* <button onClick={handleToggle} className={styles.button}>Toggle</button> */}
        
        </div>
        
      </div>
    );
  }
  export default Todo;
