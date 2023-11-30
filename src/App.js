import React, { useEffect, useState } from "react";
import TodoListWithState from "./TodoListWithState";
import TodoListWithSignal from "./TodoListWithSignal";

const App = () => {
  console.log("Render App");
  return (
    <div>
      <TodoListWithState />
      <TodoListWithSignal />
    </div>
  );
};

export default App;
