import * as U from './util'
// prettier-ignore
export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}` // 작은따옴표 ( '' ) 가 아니라 백틱 ( `` ) 임
// 자바스크립트는 ES6부터 문자열 생성시 '' 대신 `` 사용함
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

export const randomAvatar = () => {
  const size = U.random(200, 400)
  return picsumUrl(size, size)
}
