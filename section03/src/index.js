// commonjs

// const moduleData = require("./math");
// console.log(moduleData);

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

///////////////////////////////////
// 더 간결하게!

// const { add, sub } = require("./math"); // commonjs
// console.log(add(1, 2));
// console.log(sub(1, 2));

////////////////////////////////////////////////////////
// ES module 시스템
import { add, sub } from "./math.js";

// default function은 빼는 법도 달라
// 원래는 multiply인데 mul로 변경해서 가져올 수도 있어
import mul from "./math.js";

// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)); // -1
// console.log(mul(2, 3)); // 6

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
