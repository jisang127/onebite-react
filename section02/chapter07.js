// 1. push
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 7);

console.log(arr1);
console.log(newLength);

// 2. pop
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// 배열 맨앞 제거 + 결과값 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3);

// 4. unshift
// 배열 맨 앞에 새 요소 추가
let arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4);

/**
 * [ push / pop ] 이 [ shift / unshift ] 보다 빠름
 * 뒤에서 빼는애 > 앞에서 뺀 다음에 뒤에애들까지 순서 조정해야하는 애
 * 가능하면 push pop으로 해결봐라!
 */

// 5. slice 배열 특정범위 잘라서 새 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let slicedEasy = arr5.slice(2);
let slicedOpposite = arr5.slice(-2);
console.log(arr5); // 얘는 그대로
console.log(sliced); // 얘는 잘라서 씀!
console.log(slicedEasy);
console.log(slicedOpposite);

// 6. concat
// 두개 서로 다른 배열 이어 붙여서 새로운 배열 반환

let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
