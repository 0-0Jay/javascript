let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("연산결과 : " + (num1 + num2));

let str1 = "Hello, ";
let str2 = "world";
console.log(str1 + str2);

let res = "";
for (let i = 0; i < 5; i++) {
  res += str1;
}
res += str2;
console.log(res);

let temp1 = prompt("숫자값 입력");
let temp2 = prompt("숫자값 입력");
console.log(temp1 == temp2);

// let a = Number(prompt('값 입력'));
// let b = Number(prompt('값 입력'));
// let ab = a + b;
// console.log(ab);

// let answer = Math.floor(Math.random() * 100);
// while (true) {
//   let user = Number(prompt('숫자 입력'));
//   if (user < answer) {
//     alert('업!');
//   } else if (user > answer) {
//     alert('다운!');
//   } else {
//     alert('정답!');
//     break;
//   }
// }
