import styles from "./AddTodoForm.module.css";
import { useState } from "react";
import { toast } from 'react-toastify';

function AddTodoForm({addTodo}) {
    const [title,setTitle]=useState('');
    function handleSubmit(e) {
        e.preventDefault();// prevents page refresh
        // ceck for blank todo
        if(title.trim().length === 0){
          setTitle('');
          toast.error("type someting in input field");
          return;
        }
        const newTodo={
            id:crypto.randomUUID(),
            title:title,
            completed:false,
        };
        addTodo(newTodo);
        setTitle('');
        
    }
    function handleChange(e){
        setTitle(e.target.value);
    }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
    <input type="text"
    name='todo-title'
    id='todo-title'
    placeholder='type new todo here...'
    className={styles.todoInput}
    value={title}
    onChange={handleChange} />
    <button type='submit' className={styles.todoButton}>Add</button>
      
    </form>
  );
}

export default AddTodoForm;
