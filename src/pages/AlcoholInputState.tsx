import type { FormEvent, ChangeEvent, MouseEvent } from "react";
import { useCallback, useState } from "react";
import { Title, Subtitle } from "../components";
import { useToggle } from "../hooks";
import { Modal, ModalContent, ModalAction, Button } from "../theme/daisyui";
import { Link } from "react-router-dom";

type FormType = {
  sex: string;
  weight: number;
  alcohol: string;
  bottle: string;
  bottlecount: number;
};
type ResultType = {
  B_A_L: number;
  G_CO: number;
  YourState: string;
  Imgsrc: string;
};

export default function AlcoholInputState() {
  const [form, setForm] = useState<FormType>({
    sex: "",
    weight: 0,
    alcohol: "",
    bottle: "",
    bottlecount: 0,
  });
  const [data, setData] = useState<FormType>({
    sex: "",
    weight: 0,
    alcohol: "",
    bottle: "",
    bottlecount: 0,
  });

  const [result, setResult] = useState<ResultType>({
    B_A_L: 0.0,
    G_CO: 0.0,
    YourState: "",
    Imgsrc: "",
  });

  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 재랜더링 되지 않게 꼭 넣어야함

      const formData = new FormData();

      //alert(JSON.stringify(form, null, 2));
      if (form.sex != "" && form.bottle != "") {
        setResult((result) => ({
          ...result,
          B_A_L: parseFloat(
            data.alcohol == "소주"
              ? data.bottle == "잔"
                ? (
                    (data.bottlecount * 50 * 0.16 * 0.7894 * 0.7) /
                    (data.weight * result.G_CO * 10)
                  ).toFixed(5)
                : (
                    (data.bottlecount * 360 * 0.16 * 0.7894 * 0.7) /
                    (data.weight * result.G_CO * 10)
                  ).toFixed(5)
              : data.alcohol == "맥주"
              ? data.bottle == "잔"
                ? (
                    (data.bottlecount * 200 * 0.5 * 0.7894 * 0.7) /
                    (data.weight * result.G_CO * 10)
                  ).toFixed(5)
                : (
                    (data.bottlecount * 500 * 0.5 * 0.7894 * 0.7) /
                    (data.weight * result.G_CO * 10)
                  ).toFixed(5)
              : data.bottle == "잔"
              ? (
                  (data.bottlecount * 45 * 40 * 0.7894 * 0.7) /
                  (data.weight * result.G_CO * 10)
                ).toFixed(5)
              : (
                  (data.bottlecount * 750 * 40 * 0.7894 * 0.7) /
                  (data.weight * result.G_CO * 10)
                ).toFixed(5)
          ),
        }));
        toggleOpen();
      } else {
        alert("올바른 값을 입력하세요!");
      }
      setForm((form) => ({
        ...form,
        sex: "",
        weight: 0,
        alcohol: "",
        bottle: "",
        bottlecount: 0,
      })); // input box 초기화
      setResult((result) => ({
        ...result,
        YourState:
          result.B_A_L >= 0.03 && result.B_A_L < 0.08
            ? "😣 이만큼 드시고 운전하면 100일 면허 정지❗"
            : result.B_A_L > 0.08
            ? "😱 이만큼 드시고 운전하면 면허 취소에요 🚫"
            : "😊 조심히 귀가 하세요 💙",
        Imgsrc:
          result.B_A_L >= 0.03 && result.B_A_L < 0.08
            ? "img/drunk1.jpg"
            : result.B_A_L > 0.08
            ? "img/drunk2.jpg"
            : "img/chims.jpg",
      }));
    },
    [form]
  );

  const onChangeSex = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, sex: e.target.value }));
    setData((data) => ({
      ...data,
      sex: e.target.value,
    }));
    setResult((result) => ({
      ...result,
      G_CO: data.sex == "남자" ? 0.68 : 0.55,
    }));
  }, []);
  const onChangeWeight = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, weight: parseInt(e.target.value) }));
    setData((data) => ({
      ...data,
      weight: parseInt(e.target.value),
    }));
  }, []);
  const onChangeAlcohol = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, alcohol: e.target.value }));
    setData((data) => ({
      ...data,
      alcohol: e.target.value,
    }));
  }, []);

  const onChangeBottle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({ ...form, bottle: e.target.value }));
    setData((data) => ({
      ...data,
      bottle: e.target.value,
    }));
  }, []);

  const onChangeBottleCount = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm((form) => ({ ...form, bottlecount: parseInt(e.target.value) }));
      setData((data) => ({
        ...data,
        bottlecount: parseInt(e.target.value),
      }));
    },
    []
  );

  const onClickCancel = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setForm((form) => ({
      ...form,
      sex: "",
      weight: 0,
      alcohol: "",
      bottle: "",
      bottlecount: 0,
    }));
    alert("취소되었습니다.");
  }, []);

  // prettier-ignore
  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={onSubmit} className="px-8 pt-6 pb-8 mb-4 rounded-lg bg-gradient-to-b from-white via-white to-white" style={{height: '570px'}}>
        <div className="mb-4">
          <div className="relative">
            <div>
              <label className="font-bold label">👩🏻 🧑🏻 성별을 입력해주세요</label>
            {/* <SelectBox1/> */}
            <input value={form.sex} onChange={onChangeSex} id = "sex" type="text" placeholder="성별 입력" 
            className="input input-primary" list="sexlist"/>
            <datalist id = "sexlist">
              {/*{ text: "Pizza", value: "1" } */}
              <option value="남자"/>
              <option value="여자"/>
            </datalist>
          </div>
          </div>
          <div className="mb-4"> 
          <div className="relative">
            <label className="font-bold label">⏲ 몸무게를 입력해주세요(1kg ~ 200kg)</label>
            <input value={form.weight} onChange={onChangeWeight} id = "weight" type="number" min="1" max="200" placeholder="enter your weight" 
            className="input input-primary"/>
          </div>
          </div> 
          <div className="mb-4">
            <label className="font-bold label">🍾 드실 주류를 입력해주세요</label>
            <div className="relative">
            <input value={form.alcohol} onChange={onChangeAlcohol} id = "alcohol" type="text" placeholder="주류 입력" 
            className="input input-primary" list = "alcohollist" />
            <datalist id = "alcohollist">
              <option value="소주"/>
              {/*{ text: "Pizza", value: "1" } */}
              <option value="맥주"/>
              <option value="양주"/>
            </datalist>
            </div>
            </div>
          <div className="mb-4">
            <label className="font-bold label">😝 얼마나 드실건가요?</label>
            <div className="flex justify-between">
              <div className="relative w-1/2 mr-2">
                <input value={form.bottlecount} onChange={onChangeBottleCount} id="bottlecount" type="number" min="1" placeholder="enter your bottlecount" className="input input-primary" />
                </div>
                <div className="relative w-1/2 mr-1">
                  <input value={form.bottle} onChange={onChangeBottle} id="bottle" type="text" placeholder="몇 병 입력" className="input input-primary" list="bottlelist" />
                  <datalist id="bottlelist">
                    <option value="잔" />
                    <option value="병" />
                  </datalist>
                </div>
              </div>
            </div>
          <div className="flex mt-4">
            <div className="mx-0">
              <input type="submit" value="결과보기" className="px-20 py-2 font-bold text-white bg-blue-600 rounded px-15 px-22 hover:bg-blue-700 focus:outline-none focus:shadow-outline"/>
              <button value="Cancel" onClick={onClickCancel} className="px-24 py-2 mx-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow px-22 hover:bg-gray-100">취소</button>
            </div> 
          </div>
          <div className="flex justify-center mt-5 mr-5">
            <Link to="/">
              <button className="btn">돌아가기</button>
            </Link>
          </div> 
        </div>
      </form>
    <Modal open={open}>
      <ModalContent
        closeIconClassName="btn-primary btn-online"
        onCloseIconClicked={toggleOpen}>
        <div className="p-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-300">
          <Subtitle className="pb-2 font-bold text-white">🙋🏻‍♂️ 당신의 상태는 ?</Subtitle>
          <div className="p-4 border-2 border-white rounded-md">
            <p className="text-lg font-semibold text-white">😵 혈중 알코올 농도 : {result.B_A_L}</p>
            <p className="text-lg font-semibold text-white">⏰ 예상 알코올 해독 시간 : {(result.B_A_L / 0.015).toFixed(1)} 시간</p>
            <p className="text-lg font-bold text-white">{result.YourState}</p>
            <img src={result.Imgsrc}/>
          </div>
        </div>
        <ModalAction>
          <button className="btn btn-primary" onClick={onAccept}>
            Accept
          </button>
          <button className="btn" onClick={toggleOpen}>
            Close
          </button>
        </ModalAction>
      </ModalContent>
    </Modal>
  </div>
 )
}
