import React from "react";
import "../CSS/Button.css";

function Button({ children, classname, onclick = () => {} }) {
  return (
    <button className={classname} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
