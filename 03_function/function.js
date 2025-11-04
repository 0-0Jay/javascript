// function.js
// 함수표현식 정의.
function sum(x, y) {
  let result = x + y;
  console.log(`${x} + ${y} = ${result}`);
}

let sum1 = (x, y) =>  x + y;
sum(10, 20);