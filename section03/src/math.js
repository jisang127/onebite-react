// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export { add, sub };

// 이렇게 export function 앞에 선언해줘도 가능!
export function hello(a, b) {
  return a + b;
}

export function hello2(a, b) {
  return a - b;
}

// ES Module System에서는 하나의 모듈을 대표하는
// function 하나만도 내보내기 가능 => default
export default function multiply(a, b) {
  return a * b;
}
