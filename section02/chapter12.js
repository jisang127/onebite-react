// 자바스크립트 엔진 => 쓰레드가 1개밖에 없음... // 싱글쓰레드
// => 비동기 필요!

// 1. setTimeout(콜백함수, 몇초갈지)
setTimeout(() => {
  console.log(2);
}, 3000);

// 자바스크립트는 싱글스레든데 어떻게 동시작업 처리가 되는거지?
// 비동기 함수 발견하면???
// -> 자바스크립트 엔진이 아니라 Web APIs(브라우저가 직접 관리하는 별도 공간)에서 실행

// 비동기 - 콜백함수
// 실제 사용하려면 콜백함수 인자로 받아서 써야함
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum); // 여기!!!
  }, 3000);
}

// add(1, 6, (value) => {
//   console.log(value);
// });

///////////////////////////////////////////////////
// 배민으로 음식 주문하면?
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 1000);
}

// 음식을 식히자
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `2초 식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const feezedFood = `마침내 냉동된 ${food}`;
    callback(feezedFood);
  }, 1500);
}

orderFood((food) => {
  // 콜백+콜백+콜백... 지옥.... Promise 비동기 작업 도와주는 객체... 사용하자..
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(food, (feezedFood) => {
      console.log(feezedFood);
    });
  });
});
