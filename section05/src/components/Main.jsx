// JSX 주의 사항
// 1. 중괄호 내부에는 js 표현식만 가능
// if / for 등은 불가능
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 (boolean / 객체 / null / undefined 안됨)
// 3. 최상위 태그는 반드시 하나여야만 한다 -> <main>

const Main = () => {
  const number = 9;
  const obj = { a: 1 };
  return (
    // <div></div> => 최상위 태그 하나만 있어야 해 // 여기서는 main
    <main>
      <img />
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {/* {obj} */}
      {obj.a}
    </main>
  );
};

export default Main;
