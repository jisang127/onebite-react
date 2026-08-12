// 1. 객체 생성
// let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

let name = person.name;
console.log(name);

// let age = person["age"];
// console.log(age);

// 1. 새로운 프로퍼티 추가
// person["favoriteFood"] = "떡볶이";
person.favoriteFood = "떡볶이;;;;;"; // 이것도 가능

// 2. 프로퍼티 수정
person.job = "Fe developer";

// 3. 삭제
delete person.job;
console.log(person);

// 객체 안에 있는지 확인할 때 -> in
let result1 = "name" in person;
console.log(result1);

if (!("cat" in person)) {
  console.log("hello");
}

// 배열 - 생성
// let arrA = new Array();
let arrB = [];

// 함수도 들어갈 수 있다
let arrC = [1, 2, 3, true, null, undefined, () => {}, {}, []];
console.log(arrC);

console.log(arrC[3]);
