// 함수 간략히
// 쓸만하네! => 너무 좋당

// 1. 변수에도 함수를 담을 수 있어
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 전체 출력

varA();

// 2. 간략하게도 담을 수 있어
let varB = function funcB() {
  console.log("funcB");
};

varB();
// funcB(); // 변수에 바로 할당해서 쓰는 거기 때문에 funcB()는 사용 불가

// 3. 위 특성 이용하면 굳이 function명 지을 필요도 없어 => 그냥 함수 표현식으로!
// => 얘는 변수에 할당해서 바로 쓰니까 호이스팅 안됨!
// 콜백함수 상황에서 많이 쓰임
let varC = function () {
  console.log("funcC");
};

varC();

/**
 * 람다 함수
 */
let varD = () => {
  return 1;
};

console.log(varD());

/**
 * 보다 간단하게?
 */
let varE = (value) => value + 1;
console.log(varE(10));

// 여러줄일 경우
let varF = (value) => {
  console.log(value);
  return value + 1;
};
