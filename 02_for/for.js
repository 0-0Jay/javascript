//for.js
let sum = 0;
for (let i = 1; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);

// Math.random 10번 실행
let result = 0;
for (let i = 0; i < 10; i++) {
  let tmp = Math.ceil(Math.random() * 10);
  result += tmp;
  console.log(tmp);
}
console.log(result);

document.writeln("<table>");
for (let j = 1; j < 10; j++) {
  document.writeln("<tr>");
  for (let i = 2; i < 10; i++) {
    document.writeln("<td>" + i + " * " + j + " = " + i * j + "</td>");
  }
  document.writeln("</tr>");
}
document.writeln("</table>");

let tmp = prompt("몇단 출력?");
document.writeln("<ul>");
for (let i = 1; i < 10; i++) {
  document.writeln("<li>" + tmp + " * " + i + " = " + tmp * i + "</li>");
}
document.writeln("</ul>");
