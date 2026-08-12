// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;

console.log(one, two, three, four);
console.log(arr); // four는 arr에 없네?

// 2. 객체 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// 다른 이름으로 받고 싶다면 : 붙이고 alias = myAge
// 여기도 마찬가지로 extra는 원본 person에 효력이 없다
let { name, age: myAge, hobby, extra = "educator;;;;;" } = person;

console.log(name, myAge, hobby, extra); // 이정환 27 테니스 educator;;;;;
console.log(person);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); // 여기도 extra는 없어
};

// 그냥 person통째로 던져도 알아서 func에 나눠 들어감
func(person);
