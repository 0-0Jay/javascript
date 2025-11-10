let name = "hong";
let age = 20;
let msg;
if (age >= 20) {
  msg = "성인입니다.";
} else {
  msg = "미성년자입니다.";
}
console.log("이름은 " + name + "이고, 나이는 " + age + "입니다. " + msg);
console.log(
  `이름은 ${name}이고, 나이는 ${age}입니다. ${
    age >= 20 ? "성인입니다." : "미성년자입니다."
  }`
);

let score = 58;
console.log(score >= 60 ? "합격" : "불합격");

let numAry = [60, 70, 55, 80, 49];
let result = numAry.forEach((element) => {});
result = numAry.filter((elem, idx, ary) => {
  return elem >= 60;
});
console.log(`<span>${result.join("</span><span>")}</span>`);

result = numAry.map((elem, idx) => {
  const obj = {};
  obj.ord = idx;
  obj.val - emlem;
});
console.log(result);
