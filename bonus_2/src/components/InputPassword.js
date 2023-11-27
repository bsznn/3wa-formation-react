import React from "react";

export default function InputPassword(props) {
  return (
    <div>
      <input
        type="text"
        onChange={props.inputEntered}
        value={props.textEntered}
        className="border-2"
      />
    </div>
  );
}
