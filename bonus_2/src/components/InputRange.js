import React from "react";

export default function InputRange(props) {
  return (
    <div>
      <h3 className="text-sm text-start mb-3">
        {props.name} <span>{props.textEntered2}</span>
      </h3>
      <input
        type="range"
        min={props.minValue}
        max={props.maxValue}
        onChange={props.inputEntered2}
        value={props.textEntered2}
        increment={props.increment}
        className="border-2"
      />
    </div>
  );
}
