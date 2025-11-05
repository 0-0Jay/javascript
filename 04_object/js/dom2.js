// dom2.js
let target = document.querySelector("div > ul");
console.log(target.innerHTML);
console.log(target.innerText);
console.log(target.textContent);

// 이미지
document.querySelector("img").onclick = function (e) {
  console.dir(e.target);
  let no = Math.ceil(Math.random() * 4);
  e.target.src = "images/" + no + ".jpg";
  e.target.width = "150";
};
