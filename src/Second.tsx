import AlcoholInputState from "./pages/AlcoholInputState";
import { Link } from "react-router-dom";

const Second: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-green-100">
      <div className="w-screen h-10" />
      <h2 className="text-4xl font-bold text-center">🍺 술과 함께 🥂</h2>
      <div className="w-screen h-30" />
      <div className="flex flex-row justify-center h-screen bg-green-100">
        <div className="flex flex-col justify-center p-40 mt-20 h-1/2">
          <AlcoholInputState />
        </div>
      </div>
      <div className="flex flex-row justify-center w-screen bg-green-100"></div>
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
};
export default Second;
