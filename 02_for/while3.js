// while3.js
// 배열 크기 5 : 51 ~ 100사이의 임의 수
let randomAry = []
let max = 0, min = 101;
while (randomAry.length < 5) {
  randomAry.push(Math.ceil(Math.random() * 50) + 50);
  max = (max < randomAry.at(-1)) ? randomAry.at(-1) : max;
  min = (min > randomAry.at(-1)) ? randomAry.at(-1) : min;
}
console.log(randomAry);
console.log(max, min);

let x = 20, y = 30;
let tmp = x;
x = y;
y = tmp;
console.log(x, y);

// bubble sort;
for (let i = 4; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (randomAry[j] > randomAry[j + 1]) {
      let tmp = randomAry[j]
      randomAry[j] = randomAry[j + 1]
      randomAry[j + 1] = tmp
    }
  }
}
console.log(randomAry);