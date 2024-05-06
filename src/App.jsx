import {useState} from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import styles from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos,setTodos]=useState([
    {
      id:"1",
      title:"Homework",
      completed:false,
    },
    {
      id:"2",
      title:"Cricket",
      completed:false,
    },
    {
      id:"3",
      title:"Movie",
      completed:false,
    }
  ])

  function addTodo(newTodo){
    setTodos((todos)=>[...todos,newTodo]);
    
  }

  function deleteTodo(id){
  //  const newTodos=[];
  //  for(let todo of todos){
  //   if(todo.id!==id){
  //     newTodos.push(todo);
  //   }
  //  }
  //  setTodos(newTodos);
   //or
   setTodos((todos)=>todos.filter((todo)=>todo.id!==id));
  }

  function toggleCompleted(id){
setTodos((todos)=>todos.map((todo)=>{
  if(todo.id==id){
    return{...todo,completed:!todo.completed};
  }else{
    return{...todo};
  }
})
);
  }

  function updateTitle(id,title){
    setTodos((todos)=>todos.map((todo)=>{
      if(todo.id==id){
        return{...todo,title:title};
      }else{
        return{...todo};
      }
    })
    );
  }
  
  return (
    <>
    <ToastContainer/>
    <div className={styles.App}>
    <h1 className={styles.heading}>Todo List</h1>
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} updateTitle={updateTitle}/>
      {todos.length>0 ?(<button className={styles.clearAllTodosBtn} onClick={()=>{
  setTodos([]);
}}>Clear All Todos</button>):null}

    </div>
    </>
  );
}

export default App;
