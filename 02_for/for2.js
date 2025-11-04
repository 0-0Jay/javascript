//for2.js
let numbers = [23, 17, 92, 33, 48, 52];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] % 2 == 1) continue;
  sum += numbers[i];
}
console.log(sum);

let students = [
  { sno: 100, sname: "김민주", score: 88, gender: "female" },
  { sno: 200, sname: "박성하", score: 90, gender: "male" },
  { sno: 300, sname: "오혜경", score: 77, gender: "female" },
  { sno: 400, sname: "황성찬", score: 58, gender: "male" },
  { sno: 500, sname: "최유진", score: 67, gender: "female" },
];
for (let i = 0; i < students.length; i++) {
  console.log(
    "학생번호 : " +
      students[i].sno +
      ", 이름 : " +
      students[i].sname +
      ", 점수 : " +
      students[i].score
  );
}

console.clear();
let totalScore = 0;
let average = 0;
let count = 0;
students.forEach((i) => {
  if (i.gender == "female") {
    count++;
    totalScore += i.score;
  }
});
average = totalScore / count; //students.length;
console.log(totalScore);
console.log(average);
