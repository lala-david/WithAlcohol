import { Icon } from "../theme/daisyui";

export default function IconTest() {
  const onClick = () => {
    alert("Icon clicked!");
  };
  return (
    <section className="mt-4 h-screen flex flex-col items-center justify-center">
      {/* <Title>CopyMe</Title> */}
      <h2 className="font-bold text-3xl text-center">결과 확인</h2>
      <div className="mt-4 flex flex-row items-center justify-around">
        <Icon
          className="btn-md btn-secondary"
          name="done"
          onClick={onClick}
          type="submit"
        />
      </div>
    </section>
  );
}
