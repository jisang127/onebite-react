import { useState } from "react";

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

  // console.log(input);

  // default 속성 지정할 거면 input에 value={name} 반드시 지정해줘야함
  const onChangeName = (e) => {
    // 유의!!!!  ...input 없으면 name만 남고 나머지 키 다 날아감
    setInput({ ...input, name: e.target.value });
  };

  const onChangeBirth = (e) => {
    setInput({ ...input, birth: e.target.value });
  };

  const onChangeCountry = (e) => {
    setInput({ ...input, country: e.target.value });
  };

  const onChangeBio = (e) => {
    setInput({ ...input, bio: e.target.value });
  };
  return (
    <div>
      <div>
        <input
          value={input.name}
          onChange={onChangeName}
          placeholder={"이름"}
        />
        {/* {name} */}
      </div>
      <div>
        <input value={input.birth} type="date" onChange={onChangeBirth} />
        {input.birth}
      </div>
      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea value={input.bio} onChange={onChangeBio} />
        {input.bio}
      </div>
    </div>
  );
};

export default Register;
