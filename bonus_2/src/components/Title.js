import React from "react";

export default function Title(props) {
  return (
    <div className="flex justify-center">
      <h1 className="text-white">{props.name}</h1>
    </div>
  );
}
