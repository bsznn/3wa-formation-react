import { useState } from "react";
import InputPassword from "./components/InputPassword";
import Title from "./components/Title";
import InputRange from "./components/InputRange";

function App() {
  const [textEntered, setTextEntered] = useState("");
  const [textEntered2, setTextEntered2] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(20);

  const increment = 1; // pour incrémenter

  /* Version K

  // const [includeUppercase, setIncludeUppercase] = useState(false);
  // const funIncludeUppercase = function () {
  //   setIncludeUppercase(!includeUppercase);
  //créer plutot un objet pour chaque checkbox dans le useState

  // Pour relier la méthode array.from(), utiliser allChars pour les caractères, .join pour les relier

  */

  /*

  Version M



  */

  const inputEntered = function (event) {
    setTextEntered(event.target.value);
    console.log(event.target.value);
  };

  const inputEntered2 = function (event) {
    setTextEntered2(event.target.value);
    console.log(event.target.value);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <div className="mb-10">
        <Title name="PassSafe Maker"></Title>
      </div>
      <div>
        <InputPassword
          inputEntered={inputEntered}
          textEntered={textEntered}
        ></InputPassword>
      </div>
      <div className="border-2 bg-white p-6 mt-3">
        <InputRange
          name="Character Length"
          inputEntered2={inputEntered2}
          textEntered2={textEntered2}
          minValue={minValue}
          maxValue={maxValue}
          increment={increment}
        ></InputRange>

        <div className="block mb-2">
          <input type="checkbox" id="uppercase" name="uppercase" />
          <label for="uppercase">Include Uppercase Letters</label>
        </div>
        <div className="block mb-2">
          <input type="checkbox" id="lowercase" name="lowercase" />
          <label for="lowercase">Include Lowercase Letters</label>
        </div>
        <div className="block mb-2">
          <input type="checkbox" id="numbers" name="numbers" />
          <label for="numbers">Include Numbers</label>
        </div>
        <div className="block mb-2">
          <input type="checkbox" id="symbols" name="symbols" />
          <label for="symbols">Include Symbols</label>
        </div>
        <div className="border-2 text-center bg-blue-800 text-white p-1 rounded">
          <button>GENERATE</button>
        </div>
      </div>
    </main>
  );
}

export default App;
