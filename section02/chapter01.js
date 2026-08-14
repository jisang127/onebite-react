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

///////////////////////////////////////////////////////////////////

// 단락평가 = 코드 정리
// && 일 때 => False && ... 이면 앞에가 이미 False라 뒤에까지 검사 안한다
// || 일 때 => True || ... 이면 앞에가 이미 true라 뒤에까지 검사 안한다

// 단락 평가 활용 사례 - 코드 간단하게!
// [ as-is ]
function printNamePrev(person) {
  if (person) {
    console.log(person.name);
    return;
  } else {
    console.log("falsy!!!!!");
    return;
  }
}

// [ to-be ]
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음"); // person자체가 falsy 하면? 그냥 바로 undefined
}

printName(); // undefined || "person의 값이 없음" => truthy한 string 문자열 출력
printName({ name: "이정환" });
