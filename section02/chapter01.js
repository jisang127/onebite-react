// 1. Falsy한 값 - 조건문 에선 거짓
// 2. Truthy? => 7가지 Falsy 제외 전부
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// 3. Truthy/Falsy 어따 쓰는데?
function printName(person) {
  // person이 null이나 undefined가 아니라면
  if (person) {
    console.log(person.name);
    return;
  } else {
    console.log("falsy!!!!!");
    return;
  }
}

// let person = { name: "이정환" };
let person = null;
printName(person);
