function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
// [ as-is ]
function printNamePrev(person) {
  if (person) {
    console.log(person.name);
    return;
  } else {
    console.log("falsy!!!!!");
    return;
  }
}

// [ to-be ]
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음"); // person자체가 falsy 하면? 그냥 바로 undefined
}

printName(); // undefined || "person의 값이 없음" => truthy한 string 문자열 출력
printName({ name: "이정환" });
