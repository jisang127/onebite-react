// JSX 주의 사항
// 1. 중괄호 내부에는 js 표현식만 가능
// if / for 등은 불가능
// 2. 숫자, 문자열, 배열 값만 렌더링 된다 (boolean / 객체 / null / undefined 안됨)
// 3. 최상위 태그는 반드시 하나여야만 한다 -> <main>

import "./Main.css";

const Main = () => {
  const user = { name: "이정환", isLogin: false };

  //   return <>{user.isLogin ? <button>로그아웃</button> : <div>로그인</div>}</>;
  if (user.isLogin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div className="logout">로그인</div>;
  }
};

export default Main;
