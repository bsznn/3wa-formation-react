import React, { useEffect, useState } from "react";
import InputAdd from "./components/InputAdd";
import Title from "./components/Title";
import Select from "./components/Select";
import { LuDollarSign } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";

// faire une pop-up qui affiche les détails dans une nouvelle fenêtre

function App() {
  const [textEntered, setTextEntered] = useState("");
  const [textEntered2, setTextEntered2] = useState("");

  const [selectedTip, setSelectedTip] = useState("");
  const [textEntered3, setTextEntered3] = useState("");

  // Variable pour saisir le custom tip
  const [customTip, setCustomTip] = useState("");

  const inputProps = function (event) {
    setTextEntered(event.target.value);
    console.log(event.target.value);
  };

  const inputProps2 = function (event) {
    setTextEntered2(event.target.value);
    console.log(event.target.value);
  };

  const inputProps3 = function (event) {
    setTextEntered3(event.target.value);
    console.log(event.target.value);

    setCustomTip(event.target.value);
  };

  const handleSelectTip = (tip) => {
    setSelectedTip(tip);
    console.log(`${tip}%`);

    setTextEntered3("");
  };

  const resetValues = () => {
    setTextEntered("");
    setTextEntered2("");
    setSelectedTip("");
    setTextEntered3("");
  };

  const tips = [5, 10, 15, 20, 50];

  let totalTips =
    textEntered * (selectedTip / 100 || customTip / 100 || textEntered3 / 100);
  if (isNaN(totalTips)) {
    totalTips = 0;
  }

  let tipByPeople = totalTips / textEntered2;
  if (isNaN(tipByPeople)) {
    tipByPeople = 0;
  }

  let totalByPeople = textEntered / textEntered2 + tipByPeople;
  if (isNaN(totalByPeople)) {
    totalByPeople = 0;
  }

  /* ANCIENNE VERSION qui m'affichait NAN

  const totalTips = textEntered * (selectedTip / 100 || textEntered3 / 100); //if
  const tipByPeople = totalTips / textEntered2; //if

  const totalByPeople = textEntered / textEntered2 + tipByPeople;

  */

  const icon1 = <LuDollarSign className="text-xl mr-2 text-gray-400" />;
  const icon2 = <IoPerson className="text-xl mr-2  text-gray-400" />;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-indigo-400 font-mono">
      <div className="text-4xl font-bold mb-5">
        <Title></Title>
      </div>
      <section className="bg-white flex p-4 text-center rounded">
        <div className="block">
          <div>
            <div>
              <InputAdd
                name="Bill"
                icon={icon1}
                inputProps={inputProps}
                textEntered={textEntered}
              />
            </div>

            <div>
              <h3 className="mt-5 text-left ml-4">Select tip %</h3>
              <div className="grid md:grid-cols-3 ">
                {tips.map((tip, index) => (
                  <Select
                    key={index}
                    btn={tip}
                    handleSelectTip={function () {
                      return handleSelectTip(tip);
                    }}
                  ></Select>
                ))}
                <input
                  type="text"
                  onChange={inputProps3}
                  value={textEntered3}
                  placeholder="CUSTOM"
                  className="p-2 w-20 mt-3 rounded border-2 border-indigo-400"
                />
              </div>
            </div>
            <InputAdd
              name="Number of people"
              icon={icon2}
              inputProps={inputProps2}
              textEntered={textEntered2} // le nom de la valeur peut être différente
            />
          </div>
        </div>

        <div className="block bg-indigo-400 m-5 p-10 rounded">
          <div className="mb-20">
            <div className="flex justify-between mb-5">
              <h3 className="text-white fs-5 text-left">
                Tip Amount <br></br>
                <span className="text-sm text-slate-200">/ person</span>
              </h3>
              <p className="text-4xl  text-slate-200">${tipByPeople}</p>
            </div>
            <div className="flex justify-between">
              <h3 className="text-white fs-5 text-left">
                Total<br></br>
                <span className="text-sm text-slate-200">/ person</span>
              </h3>
              <p className="text-4xl  text-slate-200">${totalByPeople}</p>
            </div>
          </div>

          <div>
            <button
              onClick={resetValues}
              className="bg-white text-indigo-400 rounded pt-2 pb-2 ps-20 pe-20"
            >
              RESET
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
