// null 병합
// 존재하는 값 추려내는 기능
// null, undefined가 아닌 값 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var2 ?? var3;
let var6 = var3 ?? var2;
console.log(var4); // 10
console.log(var5); // 10 - 먼저 null이 아닌 애 그냥 출력
console.log(var6); // 20

let userName = "박상지";
let userNickName = "Winterlood";

let displayName = userName ?? userNicakName;
console.log(displayName);
