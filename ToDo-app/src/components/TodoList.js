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

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
  };

  return (
    <div>
      <h1> Whats plan for Today ??? </h1>
      <TodoForm onsubmit={addTodo} />
      {/* <Todo todos={todos} completeTodo={completeTodo} /> */}
    </div>
  );
}

export default TodoList;
