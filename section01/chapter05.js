let inf = Infinity; // 무한대
let mInf = -Infinity; // 음의 무한대

// 빽틱 사용 - 템플릿 리터럴 문법
let myName = "이정환";
let myLocation = "목동";
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

////////////
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자가 앞에 나와있으면 parseInt로 숫자만 뽑기 가능
console.log(strToNum2);

/////////////////////

// 비교 연산
let comp1 = 1 === 2;
let comp2 = 1 !== 1; // ==면 값의 자료형까지비교가 안됨!
let comp3 = 1 == "1"; // 같다고 인식해버림
console.log(comp3);
