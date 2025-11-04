const count2Times = (x) => {
  let result = x * 2;
  return result;
}

let result = count2Times(10);

// x~y 사이의 정수를 합한 결과 반환
const addNumber = (x, y) => {
  let result = 0;
  for (let i = x; i <= y; i++) {
    result += i;
  }
  return result;
}

result = addNumber(1, 10);
console.log(result);

// 배열의 전체값을 다 더한 결과 반환
const sumArray = (array) => {
  let result = 0;
  array.forEach(i => result += i);
  return result;
}

result = sumArray([10, 20, 30]);
console.log(result);