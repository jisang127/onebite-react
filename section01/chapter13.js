function example(value) {
  value();
}

function test() {
  // 콜백함수 - 다른 함수에 인수로 전달한 함수
  console.log("test");
}

example(test);

//////////////
// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  console.log("i am sub");
});

// 2. 콜백함수 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

// repeatDouble
repeat(5, (idx) => {
  console.log(idx * 2);
});
