// Promise 객체 => then() / catch()
// setTimeout같은 비동기 작업 function 랩핑하는 객체
// 비동기 작업 [ 실행 | 상태관리 | 결과저장 | 병렬 실행 | 다시 실행 ]

// 대기 - Pending
// 성공 - Fullfilled // resolve
// 실패 - Rejected // reject

// const promiseExample = new Promise((resolve, reject) => {
//   console.log("안녕ㅎ");
//   resolve("안녕하신가");               // 리턴할 결과값 넣기
//   reject("왜 실패했냐면... 이유가..."); // error message
// }, 2000);

const promise = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor

  setTimeout(() => {
    // const num = 10;
    const num = "Err";

    if (typeof num === "number") {
      // resolve(num + 10);
    } else {
      // reject("num이 숫자가 아닌듯?");
    }
  }, 2000);
});

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

//////////////////////////////////////////////////////
// promise 결과값 이용하려면?
// then() 메서드 -> 그후에

// promise가 resolve가 되면 then을 실행시켜줌!
promise.then((value) => {
  // console.log(value);
});

// 실패하면? reject되면? => then은 실행되지 않아
// catch 사용
promise.catch((error) => {
  //   console.log(error);
});

//////////////////////////////////////////////////////

// promise chaining => promise의 then메소드는 promise를 다시 반환!
// 그럼 그냥 promise.then().catch() 이런 형태로 짜버리면 되겟지!
promise
  .then((value) => {
    // console.log(value);
  })
  .catch((e) => {
    // console.log(e);
  });

//////////////////////////////////////////////////////

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // executor
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아님");
      }
    }, 1500);
  });

  return promise;
}

const p = add10(100);
p.then((result) => {
  // console.log(result);

  // 콜백 지옥...
  const newP = add10(result);
  newP.then((result) => {
    // console.log(result);
  });
  return newP; // 이존에는 그냥 원본 p만 리턴했는데 이제 얘가 가능해진다!!!!
});

/// [to-be] 그럼 머가 좋냐면,,, 간결화에 간결화!!!
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); //여긴 리턴만 해!
  })
  .then((secondResult) => {
    console.log(secondResult);
    return add10(secondResult);
  })
  .then((thirdResult) => {
    console.log(thirdResult);
  }); //chaining은 여기서 할게 !

/// [to-be2] 에러처리까지 간결하게 가능
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((secondResult) => {
    console.log(secondResult);
    return add10(undefined); // 중간에 오류나서 undefined이라도 어디에서 오류나던 에러처리까지 됨!
  })
  .then((thirdResult) => {
    console.log(thirdResult);
  })
  .catch((err) => {
    console.log(err);
  });
