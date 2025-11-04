// todo.js

// 1. 함수(guguDan) 매개값으로 5 => 5단 출력
function guguDan(n) {
  document.writeln('<h3>' + n + '단</h3>');
  for (let i = 1; i < 10; i++) {
    document.writeln(`${n} * ${i} = ${n * i}<br>`);
  }
}

// 2. 함수(summary) 매개값으로 7 => 1부터 7까지의 합 콘솔 출력.
function summary(n) {
  let sum = 0
  while (n > 0) {
    sum += n--;
  }
  console.log(sum);
}

// 3. 함수(addNumber) 매개값 x, y => 4, 10 사이의 정수의 합을 출력.
function addNumber(x, y) {
  sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  console.log(sum);
}

// 4.
let star = '';
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    star += '*'
  }
  star += '\n';
}
console.log(star);

guguDan(5);
summary(7);
addNumber(4, 10);