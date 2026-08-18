function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아니다!");
      }
    }, 1500);
  });

  return promise;
}

const p = add10(200);
// const p = add10(null);
// console.log(p);

p.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});
