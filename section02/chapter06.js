// 배열 순회
let arr = [1, 2, 3];
// for of 반복문 - 배열에만 사용가능
for (let item of arr) {
  //   console.log(item);
}

// 객체 순회 .keys / obeject.values
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let keys = Object.keys(person); // 여기 keys 가 배열로 리턴됨
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
  //   console.log(keys[i]);
}

/// for of - 배열에만 사용 가능
for (let key of keys) {
  const value = person[key];
  //   console.log(key, value);
}

// object.values
let values = Object.values(person);
// console.log(values);

for (let value of values) {
  //   console.log(value);
}

///////////////////////////////////////

// for in - 객체에만 쓸 수 있음
for (let key in person) {
  console.log(key);

  const value = person[key];
  console.log(key, value);
}
