import React from "react";
import { signal, computed } from "@preact/signals";


function TodoList() {
  const onInput = (event) => (newItem.value = event.target.value);

  return (
    <>
      <input type="text" value={newItem.value} onInput={onInput} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.value.map((todo, index) => {
          return (
            <li>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onInput={() => {
                    todo.completed = !todo.completed;
                    todos.value = [...todos.value];
                  }}
                />
                {todo.completed ? <s>{todo.text}</s> : todo.text}
              </label>{" "}
              <button onClick={() => removeTodo(index)}>❌</button>
            </li>
          );
        })}
      </ul>
      <p>Completed count: {completedCount.value}</p>
    </>
  );
}

export default TodoList;
