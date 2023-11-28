import React from "react";

export default function InputRange(props) {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="mb-3">{props.name}</h3>
        <p>{props.textEntered2}</p>
      </div>
      <input
        type="range"
        min={props.minValue}
        max={props.maxValue}
        onChange={props.inputEntered2}
        value={props.textEntered2}
        increment={props.increment}
        className="border-2 w-full"
      />
    </div>
  );
}
