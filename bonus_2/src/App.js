import { useState } from "react";
import InputPassword from "./components/InputPassword";
import Title from "./components/Title";

function App() {
  const [textEntered, setTextEntered] = useState("");

  const inputEntered = function (event) {
    setTextEntered(event.target.value);
    console.log(event.target.value);
  };

  return (
    <main>
      <div>
        <Title name="PassSafe Maker"></Title>
      </div>
      <div>
        <InputPassword
          inputEntered={inputEntered}
          textEntered={textEntered}
        ></InputPassword>
      </div>
    </main>
  );
}

export default App;
