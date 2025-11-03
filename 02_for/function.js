// function.js
let n1 = 10;
let n2 = 20;

function sum(n1, n2) {
  if (n1 == undefined || n1 == null) {
    console.log('n1값 지정');
    return null;
  }
  if (n2 == undefined || n2 == null) {
    console.log('n2값 지정');
    return null;
  }
  let result = n1 + n2;
  console.log(result);
  return result;
}

sum(10, 20);
sum(1, undefined);