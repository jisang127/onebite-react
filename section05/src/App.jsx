import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Button from "./components/Button";

// html 태그 반환(return)하는 것들 -> 컴포넌트
// 보통 function명 따서 부름 => 여기서는 App 컴포넌트겠지
// 컴포넌트로 쓰는 함수 첫글자는 무조건 대문자 -> 리액트는 소문자는 인정안함!
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  // Root 컴포넌트
  // 부모 컴포넌트
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} color={"red"} />
      <Button text={"블로그"}>
        <Header />
        <div>자식 요소</div>
      </Button>
    </>
  );
}

export default App;
