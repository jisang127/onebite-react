// 함수의 인자로 다른 함수를 전달할 수도 있어 => 콜백함수
// 함수 실행 시점 제어 가능
function example(value) {
  value();
}

function test() {
  // console.log("test");
}

example(test);

//////////////
// 보다 간단하게
function main(value) {
  value();
}

main(() => {
  // console.log("i am sub");
});

// 2. 콜백함수 활용은 어떻게?
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  // console.log(idx);
});

// repeatDouble
repeat(5, (idx) => {
  // console.log(idx * 2);
});

// 연습용으로 함 짜봤고...
function repeatTest(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatTest(5, (idx) => {
  console.log(idx * 2);
});
