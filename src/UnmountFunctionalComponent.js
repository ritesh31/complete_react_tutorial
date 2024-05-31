import React, { useEffect, useState } from "react";

function UnmountFunctionalComponent() {
  const [count, setCount] = useState(0);
  var interval = null;

  useEffect(() => {
    interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("unmount");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h1>Functional Component</h1>
      <h1>You have been here for {count} seconds</h1>
    </div>
  );
}

export default UnmountFunctionalComponent;

// When Cleanup Functions Run:

// The cleanup function runs once at these specific times:
// 1. After the initial render: 
//    If you don't provide a dependency array [] to useEffect, the cleanup function runs after the initial render and every subsequent update. 
//    However, this is generally considered an anti-pattern and can lead to performance issues. 
//    It's more common to use the componentDidMount lifecycle method equivalent in class components for this behavior.
// 2. Before unmount: 
//    If the component is unmounted, the cleanup function runs before the component disappears from the DOM.
// 3. Before effect re-run (with dependency change): 
//    If you provide a dependency array to useEffect, and one of the dependencies in the array changes, 
//    the cleanup function runs before the effect is re-run with the new dependencies. 
//    This allows you to clean up any resources related to the old dependencies before setting up new ones based on the updated dependencies.

// pen_spark
