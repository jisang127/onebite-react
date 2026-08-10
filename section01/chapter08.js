// null 병합
// 존재하는 값 추려내는 기능
// null, undefined가 아닌 값 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var2 ?? var3;
let var6 = var3 ?? var2;
console.log(var4);
console.log(var6);

let userName = "박상지";
let userNickName = "Winterlood";

let displayName = userName ?? userNicakName;
console.log(displayName);

// 2. typeof 연산자
// 값 타입 문자열로 반환

let t1 = typeof displayName;
console.log(t1);

// 3. 삼항 연산자 - 조건식 이용
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
