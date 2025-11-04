//while.js
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// let randomNum = Math.ceil(Math.random() * 10);
// while (randomNum != 5) {
//   console.log(randomNum);
//   randomNum = Math.ceil(Math.random() * 10);
// }
do {
  randomNum = Math.ceil(Math.random() * 10);
  console.log(randomNum);
} while (randomNum != 5);
console.log("end");

let input = prompt("학생 성적을 입력(종료는 quit)");
let score = [];
while (input != "quit") {
  score.push(input);
  input = prompt("학생 성적을 입력(종료는 quit)");
}
console.log(score);
console.log("end");
