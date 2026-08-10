// 함수 선언

function getArea(width, height) {
  let area = width * height;
  console.log(area);
  return area;
}

console.log(getArea(11, 20));

// js 호이스팅 -> 끌어올리다
// 함수 선언이 호출보다 아래에 있어도 알아서 끌어올려서 실행
// 함수 선언 어디에 해도 자유롭다
