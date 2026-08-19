import "./App.css";
import { useState } from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
// html 태그 반환(return)하는 것들 -> 컴포넌트
// 보통 function명 따서 부름 => 여기서는 App 컴포넌트겠지
// 컴포넌트로 쓰는 함수 첫글자는 무조건 대문자 -> 리액트는 소문자는 인정안함!

function App() {
  // [ 관리할 값, 해당 값 변화시킬 함수 ]
  // const [count, setCount] = useState(1);
  // console.log(count);

  // 컴포넌트 값이 바뀌면 리렌더링으로 return값을 재 반환한다!
  return (
    <>
      <Bulb />
      {/* <h1>{light}</h1> */}
      <Counter />
    </>
  );
}

export default App;
