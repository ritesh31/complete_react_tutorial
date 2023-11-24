import React, { useContext } from "react";
import ThemeContext from "./Context";

function Form() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        padding: "40px",
        marginTop: "20px",
      }}
    >
      <h3 style={{ color: theme === "dark" ? "white" : "black" }}>Welcome</h3>
      <div>
        <button>SignIn</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}

export default Form;
