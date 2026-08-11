// 1. 상수 객체
// 값 추가 or 수정 삭제는 가능
const animal = {
  type: "고양이",
  name: "나비",
  color: "black,",
};

// animal = {a: 1}; // animal은 상수니까 그 자체 변경은 안되고
// animal = 3;
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티

const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕");
  },
};

person.sayHi();
