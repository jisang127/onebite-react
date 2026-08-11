// 배열 순회 메서드
// 1. foreach
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

/////////////////////////////////////////

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

/////////////////////////////////////////

// 2. includes
// 배열에 특정 요소 있는지 확인
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

/////////////////////////////////////////

// 3. indexof - 중복이라면 가장 처음 찾은 index 리턴 / 없으면 -1 리턴
let index = arr2.indexOf(2);
console.log(index);

/////////////////////////////////////////
// 4. findIndex - 모든 요소를 순회! + 콜백함수 만족하는 요소 찾기
const findedIndex = arr2.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

// 간결하게 조건문만 쓰기도 가능
const findedIndex = arr2.findIndex((item) => {
  item % 2 !== 0;
});

console.log(findedIndex);
