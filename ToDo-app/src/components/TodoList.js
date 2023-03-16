import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  return (
    <div>
      <h1> Whats plan for Today ??? </h1>
      <TodoForm onsubmit={addTodo} />
    </div>
  );
}

export default TodoList;
