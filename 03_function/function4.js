let initValue = 10;
let result = 0;

setTimeout(function () {
  result = initValue + 10;
  console.log(`첫번째 ${result}`);

  setTimeout(function () {
    result = result * 2;
    console.log(`두번째 ${result}`);

    setTimeout(function () {
      result = result - 5;
      console.log(`세번째 ${result}`);
      console.log(`최종결과 : ${result}`);
    }, 1000);
  }, 1500);
}, 2000);
