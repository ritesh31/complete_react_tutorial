import React, { memo } from "react";

const Button = memo(({ children, buttonclick }) => {
  console.log("Inside button");
  const handleClick = () => {
    buttonclick?.();
  };

  return (
    <button type="button" onClick={() => handleClick()}>
      {children}
    </button>
  );
});

export default Button;
