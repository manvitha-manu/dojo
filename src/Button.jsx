import React from "react";

const Button = (props) => {
  const message = props.message;
  return (
    <div>
      <button>{message}</button>
    </div>
  );
};

export default Button;
