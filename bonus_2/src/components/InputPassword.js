import React from "react";

export default function InputPassword(props) {
  return (
    <div>
      <input type="password" onChange={inputEntered} value={textEntered} />
    </div>
  );
}
