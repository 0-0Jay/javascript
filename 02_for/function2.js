// function2.js

function differenceBetween2Number(x, y) {
  if (x < y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  console.log(x - y);
  return x - y;
}

differenceBetween2Number(9, 16);
