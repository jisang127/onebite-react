// 5가지 배혈 변형 메서드

// 1. filter
// 기존 배열에서 조건 만족하는 요소들만 필터링해 새로운 배열로 반환

let arr = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr.filter((item) => {
  if (item.hobby === "테니스") return true;
});

const tennisPeople2 = arr.filter((item) => item.hobby === "테니스");
console.log(tennisPeople2);

////////////////////////////////////////////////////////////////////////

// 2. map
// 배열 모든 요소 순회하면서 각각 콜백함수 실행하고 결과값 모아서 "새 배열"로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

console.log(mapResult1);

////////////////////////////////////////////////////////////////////////

// 어디다 쓸 건데?
let nameArr = [];
arr.map((item, idx, arr) => {
  nameArr.push(item.name);
});
console.log(nameArr);

// power간략화!!! - 멋진데...
let names = arr.map((item) => item.name);
console.log(names);

////////////////////////////////////////////////////////////////////////

// 3. sort -> 배열 사전순 정렬?
let alpabet = ["a", "b", "c"];
alpabet.sort();
console.log(alpabet);

// 숫자는?
let numbers = [10, 3, 5, 5]; // 얘는 그냥 sort 해도 10, 3, 5, 5
numbers.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    // sort 함수에서 양수 반환하게 되면 둘중에 더 작은 값이 앞에 옴
    return 1; //  ->  b, a 배치
    //
  } else if (a < b) {
    return -1; // -> a, b 배치
    //
  } else {
    // 둘이 같다면?
    // 두 값 자리를 바꾸지 말고 그대로 유지해라
    return 0;
  }
});
console.log(numbers);
// 내림차순은 반대로 하면 되겟지

////////////////////////////////////////////////////////////////////////

// 4. toSorted - 가장 최근에 추가된 최신 함수
// 기존 배열은 냅두고, 정렬된 새로운 배열 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

////////////////////////////////////////////////////////////////////////

// 5. join
// 배열 모든 요소 하나 문자열로 합쳐서 반환

let arr6 = ["hello", "world", "!!"];
const joined = arr6.join(" / "); // 바꾸고 싶은 구분자를 넣어주면 된다!
console.log(joined);
