const stud1 = { sno: 100 };
stud1.name = "홍길동"; // 속성추가
stud1["score"] = 90; // 속성추가
stud1.study = function () {
  console.log(`${stud1.name}이 공부합니다.`);
};
stud1.friendName = ["김길동", "최은식", "마동일"];
stud1.teacher = { tname: "허정무", age: 40 };
stud1.study(); // 메소드 호출
stud1.addFriend = function (newFriend) {
  stud1.friendName[stud1.friendName.length] = newFriend;
};
stud1.addFriend("박충식");
console.log(stud1);
console.log(stud1.teacher.age);

// 배열
const numbers = [];
numbers.push(10); // 추가
numbers.push(20);
numbers.unshift(30);
numbers.pop();
console.log(numbers);

const members = [];
members.push({
  memberId: "user1",
  memberName: "김우진",
  phone: "010-2222-2222",
});

members.push({
  memberId: "user2",
  memberName: "강감찬",
  phone: "010-3333-3333",
});

members.push({
  memberId: "admin",
  memberName: "박태환",
  phone: "010-9999-9999",
});

// let searchName = prompt("이름 입력");
let searchPhone = "";

// members.forEach(function (elem, idx, ary) {
//   if (elem.memberName == searchName) {
//     searchPhone = elem.phone;
//   }
// });

// if (searchPhone) {
//   alert(`연락처: ${searchPhone}`);
// } else {
//   alert(`찾는 이름 없음`);
// }

console.log(typeof members);

// 1. concat
let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let result = ary1.concat(ary2);
console.log(ary1, ary2, result);
result.push(11);

// 2. every
let isTureOrNot = result.every(function (elem, idx, ary) {
  if (elem < 10) {
    return true;
  } else {
    return false;
  }
});
console.log(isTureOrNot);

// indexOf
let idx = result.indexOf(55);
console.log(`idx => ${idx}`);

idx = ["홍길동", "김민규", "박창식"].indexOf("영진");
if (idx > -1) alert("있음");
else alert("없음");
