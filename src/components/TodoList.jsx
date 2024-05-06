import Todo from "./Todo";
function TodoList({ todos,deleteTodo,toggleCompleted, updateTitle }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} updateTitle={updateTitle}/>;
      })}
    </div>
  );
}
export default TodoList;