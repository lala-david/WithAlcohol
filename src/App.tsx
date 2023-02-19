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
    <div className="h-screen w-screen bg-green-100">
      <h2 className="text-3xl font-bold text-center">술과,, 함께,,</h2>
      <div className="flex flex-row justify-center h-screen">
        <div className="flex flex-col justify-center h-screen p-4 mt-4">
          <AlcoholInputState />
        </div>
        {/* <IconTest />
        <div className="flex flex-col justify-center p-4 mt-4">
          <div>
            <label className="font-bold label">예상 혈중 알코올 농도</label>
            <Input className="input-info" />
          </div>
          <div>
            <label className="font-bold label">
              그걸 다 먹는다면 당신은...
            </label>
            <Input className="input-info" />
          </div>
          <div>
            <label className="font-bold label">예상 해독 시간</label>
            <Input className="input-info" />
          </div>
          <div>
            <label className="font-bold label">숙취해소 솔루션!@@!!@!@</label>
            <Input className="input-info" />
          </div>
        </div> */}
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
