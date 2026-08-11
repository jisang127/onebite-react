// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

let person = {
  name: "이정환",
  nickname: "winterlood",
  age: 27,
  location: "목동",
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  10: 20,
  "like cat": true,
};

let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];

// 새로운 프로퍼티 추가
person.job = "Fe developer";
person["favoriteFood"] = "떡볶이";
console.log(person);

delete person.job;
console.log(person);

let result1 = "name" in person;
console.log(result1);

if (!("cat" in person)) {
  console.log("hello");
}
