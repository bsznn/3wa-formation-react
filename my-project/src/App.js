import Greetings from "./components/Greetings";
import ItemTopics from "./components/ItemTopics";
import data from "./assets/data.js";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import InfosPages from "./pages/InfosPages.js";
import HomePage from "./pages/HomePage.js";
import Header from "./components/Header.js";

function App() {
  console.log(data);
  return (
    <main className="bg-slate-900	min-h-screen">
      <Header />

      <Routes>
        <Route path="/:infos" element={<InfosPages />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
