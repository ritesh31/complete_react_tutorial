import React from "react";

function Button({ children, buttonclick }) {
  const handleClick = () => {
    buttonclick?.();
  };

  return (
    <button type="button" onClick={() => handleClick()}>
      {children}
    </button>
  );
}

export default Button;
