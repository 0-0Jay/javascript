// 연산자
// console.log(heading);
// console.log(result);

result = 30 % 20;
console.log(result);
result++;
console.log(result);
console.log(++result, result++);

//할당연산자
let str = 'hello';
console.log(str);
console.clear();
result = str = 'world';
result = result + ' another'
result += ' world'
console.log(result);

let num = 10;
num -= 10;
num *= 10;
num += 10;
num /= 10;
console.log(num);

// 비교연산자 -> true or false
console.log(10 == '10');
console.log(10 === '10');
console.log(10 < '10');

// 논리연산자
console.log(10 <= 10 && 10 < 10);
console.log(10 <= 10 || !(10 < 10));


for (let i = 1; i < 10; i++) {
  for (let j = 2; j < 10; j++) {
    document.writeln(String(j).padStart(2, '0') + ' * ' + String(i).padStart(2, '0') + ' = ' + String(i*j).padStart(2, '0'));
  }
  document.writeln('<br>');
}