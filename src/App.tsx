import NumberState from "./pages/NumberState";
import InputTest from "./pages/InputTest";
import ShowHideModal from "./pages/ShowHideModal";
import RadioInputTest from "./pages/RadioInputTest";
import HigherOrderRadioTest from "./pages/HigherOrderRadioInputTest";
import BasicForm from "./pages/BasicForm";
import ObjectState from "./pages/ObjectState";
import ArrayState from "./pages/ArrayState";
import { Input } from "./theme/daisyui";
import SelectBox1 from "./pages/SelectBox1";
import IconTest from "./pages/IconTest";
import AlcoholInputState from "./pages/AlcoholInputState";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Second from "./Second";
//import "./style.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Second" element={<Second />} />
      </Routes>
    </Router>
  );
};

export default App;
