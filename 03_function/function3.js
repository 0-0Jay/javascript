// 매개값으로 함수 사용
function doItFunction(param) {
  let x = 10;
  let result = param(x);
  console.log(result);
}

const get2Times = (n) => n * 2
const get4Times = (n) => n * 4

doItFunction(get2Times);
doItFunction(get4Times);