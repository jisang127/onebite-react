// 1. async
// 어떤 함수를 비동기 함수로 만들어줘!
// 함수가 프로미스 반환하도록 변환해주는 키워드

async function example() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

console.log(example());

///////////////////////////////////////////////////
// 그럼 애초에 프로미스 자체를 반환하는 애라면?
async function getData() {
  //async는 별다른 기능 없이 그냥 그대로 promise 내보냄 // 의미 없음...
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

console.log(getData());

///////////////////////////////////////////////////
// 2. await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// [as-is]
async function printDataPrev() {
  getData().then((result) => {
    console.log(result);
  });
}

// printDataPrev();

// [to-be]
async function printData() {
  const data = await getData(); //
  console.log(data);
}

printData();
