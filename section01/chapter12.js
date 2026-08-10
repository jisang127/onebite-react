function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

varA();

let varB = function funcB() {
  console.log("funcB");
};

varB();
// funcB(); // 변수에 바로 할당해서 쓰는 거기 때문에 funcB()는 사용 불가

// 위의 특성을 이용하면 굳이 function명을 지을 필요도 없겠네
// 그냥 함수 표현식 => 얘는 변수에 할당해서 바로 써야하니까 호이스팅 안됨!
// 콜백함수 상황에서 많이 쓰임
let varC = function () {
  console.log("funcC");
};

varC();

/**
 * 람다 함수
 */
