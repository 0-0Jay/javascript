// 조건문
if (10 <= 10) {
  // if 블럭
}

// 회원(회원번호, 회원명, 회원점수(75))
let members = [];

members[0] = {
  mno: 1001,
  mname: "김민준",
  mscore: 123,
};

members[1] = {
  mno: 1002,
  mname: "박설명",
  mscore: 95,
};

members[2] = {
  mno: 1003,
  mname: "이충희",
  mscore: 100,
};

let result = {
  sum: 0,
  avg: 0,
};

for (let i = 0; i < 3; i++) {
  result.sum += members[i].mscore;
}

result.avg = result.sum / members.length;
console.log(result);

let idx = 2;
if (members[idx]["mscore"] > result["avg"]) {
  console.log(members[idx].mname + "의 점수는 평균보다 큽니다.");
} else if (members[idx]["mscore"] == result["avg"]) {
  console.log(members[idx].mname + "의 점수는 평균과 같습니다.");
} else {
  console.log(members[idx].mname + "의 점수는 평균보다 작습니다.");
}
