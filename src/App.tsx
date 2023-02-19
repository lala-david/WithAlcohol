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

export default function App() {
  return (
    <div className="w-screen h-screen bg-green-100">
      <h2 className="text-3xl font-bold text-center">술과,, 함께,,</h2>
      <div className="flex flex-row justify-center h-screen">
        <div className="flex flex-col justify-center h-screen p-4 mt-4">
          <AlcoholInputState />
        </div>
      </div>
    </div>

    // <main>
    //   <ArrayState />
    //   <ObjectState />
    //   <BasicForm />
    //   <HigherOrderRadioTest />
    //   <RadioInputTest />
    //   <ShowHideModal />
    //   <InputTest />
    //   <NumberState />
    // </main>
  );
}
