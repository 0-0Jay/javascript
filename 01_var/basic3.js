// 배열
let foods = ["감자탕", "짜장면", "탕수육", "햄버거"];
console.log(foods);
console.log(foods[0], foods[1]);

foods[1] = "짬뽕";
console.log(foods);

foods[4] = "삼겹살";
console.log(foods);

let points = [100, 123, 211, 305];
let result = points[0] + points[3];
console.log(result);

console.log(Math.random());
console.log(Math.floor(Math.random() * 101));

let p = [
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
];
console.log(p[0] + p[3]);
let res = p[0] + p[p.length - 1];
console.log(res);

let number = [];
let result2 = 0;
for (let i = 0; i < 3; i++) {
  number[i] = parseInt(prompt("숫자 입력"));
  result2 += number[i];
}
console.log(number, result2);
