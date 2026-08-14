// 배열 순회 메서드
// -> foreach / includes / indexof / findIndex(콜백조건추가 가능) / find

// 1. foreach
let arr = [1, 2, 3];
let doubledArr = [];
arr.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

/////////////////////////////////////////

// 2. includes
// 배열에 특정 요소 있는지 확인
let isInclude = arr.includes(3);
// console.log(isInclude);

/////////////////////////////////////////

// 3. indexOf - 중복? 가장 처음 찾은 index 리턴 / 없으면 -1 리턴
let index = arr.indexOf(2);
// console.log(index);

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// 4. findIndex - 모든 요소를 순회! + 콜백함수 만족하는 요소 찾기
const findedIndex = arr.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
// console.log(findedIndex); // 0

// 간결하게 조건문만 쓰기도 가능
const findedIndex2 = arr.findIndex((item) => {
  item % 2 !== 0;
});
// console.log(findedIndex2); // -1 ????
// {} 이걸 쓰면 명시적으로 여러줄이니 return을 반드시 써줘야하는데
// 지금 return이 없으므로 undefined로 falsy가 됨 => 해당하는 값 없다고 -1 반환

const findIndex = arr.findIndex((item) => item % 2 !== 0);
// console.log(findIndex); // 0

/////////////////////////////////////////
// indexOf가 있는데 findIndex가 필요한 이유?
// 객체타입에서는 findIndex로 밖에 못 찾아
// indexOf => 얕은비교(===)

// 객체는 프로퍼티 기준으로는 비교가 되지 않아
// findIndex 사용 필요!

let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이정환" })); // -1 ????

console.log(objectArr.findIndex((item) => item.name === "이정환")); // 0, 이건 찾아짐

/////////////////////////////////////////

// 5. find? => 해당 객체 자체를 반환
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");
console.log(finded); // {name : '이정환'}
