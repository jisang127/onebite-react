let animal = "dog";

switch (animal) {
  case "cat":
    console.log("고양이");
    break; // 반드시 break 적어줘야해
  case "dog":
    console.log("강아지");
  case "snake":
    console.log("뱀");
  default:
    console.log("그런 동물은 모르는데..");
}

// conitnue
for (let idx = 0; idx < 5; idx++) {
  if (idx % 2 === 0) continue;
  console.log(idx);
  if (idx >= 3) break;
}

// 함수 호이스팅
// js 호이스팅 -> 끌어올리다
// 함수 선언이 호출보다 아래에 있어도 알아서 끌어올려서 실행
// 함수 선언 어디에 해도 자유롭다
