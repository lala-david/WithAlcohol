// import type { FC, CSSProperties } from "react"; 방법 1, 2

// 리액트 컴포넌트 스타일링 기법
// 가장 리액트 스러운 구현방식
import type { FC, DetailedHTMLProps, HTMLAttributes } from "react";

type ReactSpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;
export type IconProps = ReactSpanProps & {
  name: string;
};
// prettier-ignore
export const Icon: FC<IconProps> = ({ name, className: _className, ...props}) => {
  const className = ["material-icons", _className].join(" ");
  return (
    <span {...props} className={className}>
      {name}
    </span>
  );
};
// export type IconProps = {
//   name: string;
//   style?: CSSProperties;
// }; 방법 1, 2의 속성 정의
// 속성 타입을 모르면 속성에 커서 클릭하고 f12누르면 알 수 있음
// 방법 1
// export const Icon: FC<IconProps> = ({ name, style }) => {
//   return (
//     <span className="material-icons" style={style}>
//       {name}
//     </span>
//   );
// };
// 방법 2
// export const Icon: FC<IconProps> = ({ name, ...props }) => {
//   return (
//     <span {...props} className="material-icons">
//       {name}
//     </span>
//   );
// };
