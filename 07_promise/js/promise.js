// promise.js
// pending(요청)/fulfilled(정상)/rejected(실패)
// then, catch

// 동기 방식 처리
console.log("1번처리"); // 1초
console.log("2번처리"); // 1.5초
console.log("3번처리"); // 0.6초
// -> 앞 작업이 끝나면 다음 작업 수행. (즉 3.1초 후 프로그램 종료)

// 비동기 방식 처리(setTimeout, fetch)
setTimeout(function () {
  console.log("1번처리");
}, 1000);
setTimeout(function () {
  console.log("2번처리");
}, 1500);
setTimeout(function () {
  console.log("3번처리");
}, 600);
console.log("end of program");
// -> 동시에 작업 수행. (즉 1.5초후 프로그램 종료. end -> 3 -> 1 -> 2 순)

// 프로미스 객체
const promise = new Promise(function (resolve, reject) {
  try {
    let num1 = 3 + 4;
    num1 = callBack();
    resolve(num1);
  } catch (err) {
    reject(err);
  }
});
promise
  .then(function (result) {
    console.log("성공시 : ", result);
  })
  .catch(function (err) {
    console.log("실패시 : ", err);
  });

function delayFunction(ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(message);
      resolve(message);
    }, ms);
  });
}

delayFunction(1000, "1번처리")
  .then(() => delayFunction(1500, "2번처리"))
  .then(() => delayFunction(2000, "3번처리"))
  .then(() => {
    console.log("모든 작업 완료");
  });

// fetch("http://localhost:3000/comments")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((result) => {
//     console.logg(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
