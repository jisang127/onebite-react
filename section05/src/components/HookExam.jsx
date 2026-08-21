import { useState } from "react";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문, 반복문으로 호출될 수는 없다 => 서로 다른 훅들 때문에 순서가 엉망이 되는 경우 방지
// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

function getInput() {}

const HookExam = () => {
  // 쪼만한 input 하나를 관리하기 위해 품이 너무 많이 들어
  // 새로운 state도 만들어줘야하고 이벤트 핸들러도 하나씩 만들고 input 태그에도 다 달아줘야하잖아
  // 각각 컴포넌트마다 이거 언제 만들고 있을래...?

  //   const state = useState();
  const [input, setInput] = useState();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
