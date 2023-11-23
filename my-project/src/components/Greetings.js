import React from "react";

export default function Greetings() {
  return (
    <div className="text-white font-light">
      <h1 className="text-3xl">
        Welcome to the <br /> <span className="font-bold">Frontend Quiz !</span>
      </h1>
      <p className="text-gray-400 mt-8 italic">
        Pick a subject to get started.
      </p>
    </div>
  );
}
