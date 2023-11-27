import React from "react";

export default function Select(props) {
  return (
    <div>
      <button
        className="border-2 rounded p-2 me-2 w-20 mt-3 bg-indigo-600	text-white hover:bg-indigo-400"
        onClick={props.handleSelectTip}
      >
        {props.btn}%
      </button>
    </div>
  );
}
