// 1. Date
let date1 = new Date();
console.log(date1);

// 날짜는 - / . 중에 구분 /
// 시간은 / 하나 넣고 :로 구분
let dateDash = new Date("2025-07-07");
let dateDot = new Date("2025.07.07");
let dateSlash = new Date("2025/07/07");
let dateTimes = new Date("2025/07/07/23:59:59");
let dateNumber = new Date(1996, 7, 8, 14, 30, 30);
console.log(dateDash);
console.log(dateDot);
console.log(dateSlash);
console.log(dateTimes);
console.log(dateNumber);

/////////////////////////////////////////////////////////////////

// 2. 타임스탬프
// 특정시간이 협정세계시(UTC)"1970.01.01 00시 00분 00초"로부터 몇 ms 지났는지 의미하는 숫자
// 세계 모든 나라가 표준으로 사용하는 시간이 시작되는 지점
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

/////////////////////////////////////////////////////////////////

// 3. 연월시분초 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // month는 0부터 시작!
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

/////////////////////////////////////////////////////////////////

// 4. Date 객체 시간 수정
date1.setFullYear(2023);
date1.setMonth(2);

// 5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
