// 1. Spread 연산자 => ...
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

/////////////////////////////

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); // {a: 1, b: 2, c: 3, d: 4}

/////////////////////////////

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1); // arr1= 1,2,3 알아서 묵시적으로 들어감

/////////////////////////////

// 2. Rest 매개변수 - 나머지?
function funcB(one, ...rest) {
  // rest 뒤에는 추가적으로 선언 불가 / 지금부터 나온 건 전부 배열에 저장한다는 뜻
  // 매개변수명도 상관없음  굳이 rest가 아니어도 된다
  console.log(one);
  console.log(rest);
}

funcB(...arr2); // arr2 = [4, 1, 2, 3, 5, 6];
