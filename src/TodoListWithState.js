import React, { useState } from "react";

const TodoListItem = ({ todo }) => {
  const [checked, setChecked] = useState(todo.checked);
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
      &nbsp;{todo.title}
    </li>
  );
};
const TodoList = ({ todos }) => {
  console.log("Render TodoList");
  return (
    <ul className="p-2 text-left">
      {todos.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default function TodoListWithState() {
  console.log("Render List Container");

  const [newTodo, setNewTodo] = useState([]);
  const [todos, setTodos] = useState([]);

  function handleInput(event) {
    setNewTodo(event.target.value);
  }
  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: newTodo,
        completed: false,
      },
    ]);
    setNewTodo("");
  }

  return (
    <div style={styles.container}>
      <h2>Todo List Using State</h2>
      <TodoList todos={todos} />
      <input type="text" onChange={(event) => handleInput(event)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "100px",
    background: "lightblue",
    border: "1px solid",
  },
};
