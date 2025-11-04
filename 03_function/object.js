// 객체. => 속성, 기능
let obj = {
  name: "홍길동",
  age: 20,
  score: 80,
  showInfo: function () {
    console.log(this);
    return `학생이름 : ${obj.name}, 점수 : ${obj.score}`;
  },
};

console.log(obj.showInfo());

for (let prop in obj) {
  console.log(prop, obj[prop]);
}
