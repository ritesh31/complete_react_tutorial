import React, { useCallback } from "react";
import GrandChild from "./GrandChild";

function Child() {
  const handleClickEvent = useCallback(() => {
    console.log("Inside Child Click");
  }, []);

  return (
    <>
      <h4>Child component</h4>
      <GrandChild parentClickEvent={handleClickEvent}></GrandChild>
    </>
  );
}

export default Child;
