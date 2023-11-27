import React from "react";

export default function InputAdd(props) {
  return (
    <div>
      <h3 className="m-5 text-left">{props.name}</h3>
      <div className="border-2 flex ">
        <div className="flex items-center mr-2">{props.icon}</div>
        <input
          type="number"
          onChange={props.inputProps}
          value={props.textEntered}
          className="text-end"
        />
      </div>
    </div>
  );
}
