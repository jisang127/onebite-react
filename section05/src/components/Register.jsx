import { useState, useRef, useEffect } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// let countRegister = 0; // 이건 어때??!

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // useRef 말고 그냥 일반 js 변수로 쓰면 안되나???
  // 이건 Register자체가 리렌더링이야...
  // 그러니 count 자체를 0으로 다시 할당하게 되어서 영원히 1로 하나만 증가한 상태로 남는거지
  // 근데 useState/useRef 얘네는 초기화가 되지 않아
  // 그러면 Register() 밖에다 선언해놓고 쓰면 되는 거 아녀?
  // => 그러면... App()에서 <Register /> 두번 이상 부르잖아?
  // => 그러면 각각 관리가 되지 않아...  하나의 변수 공유해서 쓰기 때문에...!
  // 한 클래스 내에 Register()랑 countRegister 변수는 다른 애지!
  // 그냥 App에서 함수만 두번 호출해서 각각 쓰고 있는거지 Register.jsx 파일 전체를 두번 부르는 게 아냐!
  // 리액트에서는 정말 특별한 경우가 아니라면 컴포넌트 밖에 변수 선언해서 쓰지 않음!
  // useRef 사용하는 게 가장 좋다!
  let count = 0;

  // 렌더링 중이 아니라 effect 안에서 접근 (OK)
  useEffect(() => {
    // console.log(countRef.current);
  });

  const onChange = (e) => {
    count++;
    console.log(count);
    countRef.current++;
    console.log(countRef.current);
    console.log(e.target.name, e.target.value);
    // 새로운 객체 만들면서 프로퍼티의 키 자리에 대괄호 넣고 변수 넣으면 그 변수 값을 변경하겠다
    // ["name" : "박상지"]
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // console.log(input);

  const onSubmit = () => {
    if (input.name === "") {
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        {/* {name} */}
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
        {input.birth}
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
