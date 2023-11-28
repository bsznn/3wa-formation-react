import { useState } from "react";
import InputPassword from "./components/InputPassword";
import Title from "./components/Title";
import InputRange from "./components/InputRange";
import { RiFileCopyLine } from "react-icons/ri";

function App() {
  const [textEntered, setTextEntered] = useState("");
  const [textEntered2, setTextEntered2] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const icon1 = <RiFileCopyLine />;

  const increment = 1;

  const [isPasswordCopied, setIsPasswordCopied] = useState(false);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(textEntered);
    setIsPasswordCopied(true);
  };

  const inputEntered = function (event) {
    setTextEntered(event.target.value);
  };

  const inputEntered2 = function (event) {
    setTextEntered2(event.target.value);
  };

  const handleCheckboxChange = (id) => {
    switch (id) {
      case "uppercase":
        setIncludeUppercase(!includeUppercase);
        break;
      case "lowercase":
        setIncludeLowercase(!includeLowercase);
        break;
      case "numbers":
        setIncludeNumbers(!includeNumbers);
        break;
      case "symbols":
        setIncludeSymbols(!includeSymbols);
        break;
      default:
        break;
    }
  };

  const generatePasswordFunction = (characterSet, passlength) => {
    let randomPassword = "";

    for (let i = 0; i < passlength; i++) {
      let randomChar =
        characterSet[Math.floor(Math.random() * characterSet.length)];
      randomPassword += randomChar;
    }

    return randomPassword;
  };

  const generatePassword = () => {
    // Logique pour générer le mot de passe en fonction des états des cases à cocher
    // Vous pouvez ajuster cette logique en fonction de vos besoins
    const characterSet = [
      includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
      includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "",
      includeNumbers ? "0123456789" : "",
      includeSymbols ? "^!$%&|[](){}:;.,*+-#@<>~" : "",
    ].join("");

    // Utilisez la logique de génération de mot de passe que vous avez déjà
    // pour créer le mot de passe en fonction de vos critères
    const newPassword = generatePasswordFunction(characterSet, textEntered2);

    // Mettez à jour l'état du texte avec le mot de passe généré
    setTextEntered(newPassword);
    console.log(newPassword);

    setIsPasswordCopied(true);

    setTimeout(() => {
      setIsPasswordCopied(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900">
      <div className="mb-10">
        <Title name="PassSafe Maker"></Title>
      </div>
      <div>
        <InputPassword
          icon={icon1}
          inputEntered={inputEntered}
          textEntered={textEntered}
          handleCopyPassword={handleCopyPassword}
        >
          {isPasswordCopied && <p>Password copied!</p>}
        </InputPassword>
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

        <div className="mt-3">
          <div className="block mb-2">
            <input
              type="checkbox"
              id="uppercase"
              name="uppercase"
              onChange={() => handleCheckboxChange("uppercase")}
            />
            <label htmlFor="uppercase">Include Uppercase Letters</label>
          </div>
          <div className="block mb-2">
            <input
              type="checkbox"
              id="lowercase"
              name="lowercase"
              onChange={() => handleCheckboxChange("lowercase")}
            />
            <label htmlFor="lowercase">Include Lowercase Letters</label>
          </div>
          <div className="block mb-2">
            <input
              type="checkbox"
              id="numbers"
              name="numbers"
              onChange={() => handleCheckboxChange("numbers")}
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="block mb-2">
            <input
              type="checkbox"
              id="symbols"
              name="symbols"
              onChange={() => handleCheckboxChange("symbols")}
            />
            <label htmlFor="symbols">Include Symbols</label>
          </div>
        </div>

        <div className="border-2 text-center bg-blue-800 text-white p-1 rounded mt-5">
          <button onClick={generatePassword}>GENERATE</button>
        </div>
      </div>
    </main>
  );
}

export default App;
