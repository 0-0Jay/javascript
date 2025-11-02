let students = [];

students[0] = {
  sno : 100,
  sname : '철수',
  eng : 100,
  math : 100
};

students[1]= {
  sno : 200,
  sname : '영희',
  eng : 79,
  math : 85
};

students[2] = {
  sno : 300,
  sname : '영수',
  eng : 83,
  math : 92
};

let score = 0;
for (let i = 0; i < 3; i++) {
  score += students[i]['eng'] + students[i]['math']
}
console.log(score / 3);
