// while2.js
let sum = 0;
do {
  num = Math.ceil(Math.random() * 10);
  sum += num;
  console.log(num);
} while (num != 10);
console.log(sum);

for (let i = 0; i < 5; i++) {
  let star = ' '
  for (let j = 0; j <= i; j++) {
    star += '*';
  }
  console.log(star);
}

// let n = prompt("3의 제곱수 입력");
// let field = [];
// for (let i = 0; i < n; i++) {
//   tmp = [];
//   for (let j = 0; j < n; j++) {
//     tmp[j] = '■';
//   }
//   field[i] = tmp;
// }

// function star(x, y ,n) {
//   let now = n / 3
//   if (now < 1) return;
//   for (let i = x + now; i < x + now * 2; i++) {
//     for (let j = y + now; j < y + now * 2; j ++) {
//       field[i][j] = ' ';
//     }
//   }
//   for (let i = x; i < x + n; i += now) {
//     for (let j = y; j < y + n; j += now) {
//       star(i, j, now)
//     }
//   }
// }

// star(0, 0, n)
// document.writeln("<table>");
// for (let i = 0; i < n; i++) {
//   document.writeln("<tr>");
//   for (let j = 0; j < n; j++) {
//     document.writeln("<td>" + field[i][j] + "</td>");
//   }
//   document.writeln("</tr>");
// }
// document.writeln("</table>");