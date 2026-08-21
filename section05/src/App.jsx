import "./App.css";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

// html 태그 반환(return)하는 것들 -> 컴포넌트
// 보통 function명 따서 부름 => 여기서는 App 컴포넌트겠지
// 컴포넌트로 쓰는 함수 첫글자는 무조건 대문자 -> 리액트는 소문자는 인정안함!

function App() {
  // 회원가입 폼

  return (
    <>
      {/* <Register /> */}
      <HookExam />
    </>
  );
}

export default App;
