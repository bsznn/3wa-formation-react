import React from "react";

export default function InputPassword(props) {
  return (
    <div className="flex justify-content items-center border-2 pe-6 ps-6 bg-white">
      <input
        type="text"
        onChange={props.inputEntered}
        value={props.textEntered}
      />
      <div onClick={props.handleCopyPassword} style={{ cursor: "pointer" }}>
        {props.icon}
      </div>
    </div>
  );
}
