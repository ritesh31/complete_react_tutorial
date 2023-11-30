import { signal, useSignal } from "@preact/signals-react";
import React, { useState } from "react";

const TodoListItem = ({ todo }) => {
  const checked = useSignal(todo.checked);
  return (
    <li>
      <input
        type="checkbox"
        checked={checked.value}
        onChange={(event) => {
          checked.value = event.target.checked;
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
      {todos.value.map((todo, index) => (
        <TodoListItem key={index} todo={todo} />
      ))}
    </ul>
  );
};

export default function TodoListWithSignal() {
  console.log("Render List Container");

  const newTodo = useSignal("");
  const todos = useSignal([]);

  function handleInput(event) {
    newTodo.value = event.target.value;
  }

  function addTodo() {
    todos.value = [
      ...todos.value,
      {
        id: todos.value.length,
        title: newTodo.value,
        completed: false,
      },
    ];
    newTodo.value = "";
  }
  return (
    <div style={styles.container}>
      <h2>Todo List Using Signal</h2>
      <TodoList todos={todos} />
      <input type="text" onChange={(event) => handleInput(event)} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

const styles = {
  container: {
    padding: "100px",
    background: "lightyellow",
    border: "1px solid",
  },
};
