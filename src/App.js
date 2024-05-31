import React, { useEffect, useState } from "react";
import TodoListWithState from "./TodoListWithState";
import TodoListWithSignal from "./TodoListWithSignal";
import UnmountFunctionalComponent from "./UnmountFunctionalComponent";
import UnmountClassComponent from "./UnmountClassComponent";

const App = () => {
  const [flag, setFlag] = useState(false);

  console.log("Render App");
  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Click</button>
      {/* <TodoListWithState />
      <TodoListWithSignal />} */}

      {flag ? <UnmountClassComponent /> : <UnmountFunctionalComponent />}
    </div>
  );
};

export default App;
