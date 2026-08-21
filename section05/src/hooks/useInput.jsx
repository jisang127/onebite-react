import { useState } from "react";

function useInput() {
  // use만 사용하면 커스텀 훅이지롱
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
