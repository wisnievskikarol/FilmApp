import React from "react";
interface Button {
  type: "basic" | "rounded";
  text: string;
  size: "big" | "small";
}
const Button = (props: Button) => {
  return (
    <button
      className={`${props.type == "basic" ? "button" : "button--rounded"} `}
    >
      {props.text}
    </button>
  );
};

export default Button;
