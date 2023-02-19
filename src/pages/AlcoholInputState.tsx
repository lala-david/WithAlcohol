import type { FormEvent, ChangeEvent, MouseEvent } from "react";
import { useCallback, useState } from "react";
import { Title, Subtitle } from "../components";
import SelectBox1 from "./SelectBox1";
import { useToggle } from "../hooks";
import { Modal, ModalContent, ModalAction, Button } from "../theme/daisyui";

type FormType = {
  sex: string;
  weight: string;
  alcohol: string;
  bottle: string;
};
export default function AlcoholInputState() {
  const [form, setForm] = useState<FormType>({
    sex: "",
    weight: "",
    alcohol: "",
    bottle: "",
  });
  const [data, setData] = useState<FormType>({
    sex: "",
    weight: "",
    alcohol: "",
    bottle: "",
  });

  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // 재랜더링 되지 않게 꼭 넣어야함

      const formData = new FormData();

      alert(JSON.stringify(form, null, 2));

      toggleOpen();

      setForm((form) => ({
        ...form,
        sex: "",
        weight: "",
        alcohol: "",
        bottle: "",
      })); // input box 초기화
    },
    [form]
  );

  const onChangeSex = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, sex: e.target.value }));
    setData((data) => ({
      ...data,
      sex: e.target.value,
    }));
  }, []);
  const onChangeWeight = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, weight: e.target.value }));
    setData((data) => ({
      ...data,
      weight: e.target.value,
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

  const onClickCancel = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setForm((form) => ({
      ...form,
      sex: "",
      weight: "",
      alcohol: "",
      bottle: "",
    }));
    alert("취소되었습니다.");
  }, []);

  // prettier-ignore
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col justify-center h-screen p-4 mt-4">
            <div>
              <label className="font-bold label">성별을 입력해주세요</label>
              {/* <SelectBox1/> */}
              <input value={form.sex} onChange={onChangeSex} id = "sex" type="text" placeholder="enter your sex" 
              className="input input-primary" list="sexlist"/>
              <datalist id = "sexlist">
                {/*{ text: "Pizza", value: "1" } */}
                <option value="남자"/>
                <option value="여자"/>
              </datalist>
            </div>
            <div>
              <label className="font-bold label">몸무게를 입력해주세요</label>
              <input value={form.weight} onChange={onChangeWeight} id = "weight" type="text" placeholder="enter your weight" 
              className="input input-primary"/>
            </div>
            <div>
              <label className="font-bold label">드실 주류를 입력해주세요</label>
              <input value={form.alcohol} onChange={onChangeAlcohol} id = "alcohol" type="text" placeholder="enter your alcohol" 
              className="input input-primary" list = "alcohollist" />
              <datalist id = "alcohollist">
                <option value="소주"/>
                {/*{ text: "Pizza", value: "1" } */}
                <option value="맥주"/>
                <option value="양주"/>
              </datalist>
            </div>
            <div>
              <label className="font-bold label">어떤 컵으로 드실건가요?</label>
              <input value={form.bottle} onChange={onChangeBottle} id = "bottle" type="text" placeholder="enter your bottle" 
              className="input input-primary" list = "bottlelist"/>
              <datalist id = "bottlelist">
                <option value="소주잔 (50ml)"/>
                {/*{ text: "Pizza", value: "1" } */}
                <option value="맥주잔 (200ml)"/>
                <option value="샷잔 (44ml)"/>
              </datalist>
            </div>
            <div className="flex justify-center mt-4">
              <input type="submit" value="Submit" className="w-1/2 btn btn-sm btn-primary"/>
              <button value="Cancel" onClick={onClickCancel} className="w-1/2 ml-4 btn btn-sm" defaultValue="Cancel" >Cancel</button>
            </div>
          </div>
      </form>
      <Modal open={open}>
      <ModalContent
        closeIconClassName="btn-primary btn-online"
        onCloseIconClicked={toggleOpen}
      >
        <Subtitle>Modal</Subtitle>
        <p>{data.sex}</p>
        <p>{data.weight}</p>
        <p>{data.alcohol}</p>
        <p>{data.bottle}</p>
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
