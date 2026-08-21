import { useState, useRef, useEffect } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const refObj = useRef(0);
  // console.log(refObj);

  // 렌더링 중이 아니라 effect 안에서 접근 (OK)
  useEffect(() => {
    console.log(refObj.current);
    console.log("Register 렌더링");
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    // 새로운 객체 만들면서 프로퍼티의 키 자리에 대괄호 넣고 변수 넣으면 그 변수 값을 변경하겠다
    // ["name" : "박상지"]
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // console.log(input);

  return (
    <div>
      <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref +1
      </button>
      <div>
        <input
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
    </div>
  );
};

export default Register;
