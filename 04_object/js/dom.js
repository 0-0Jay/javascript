// document object model
// node - element, text, attribute
let list = document.getElementById("list");
console.log(list.childNodes[1]);

// id
list.childNodes[1].innerHTML = "apple";
list.childNodes[1].onclick = function () {
  alert("클릭");
};

// tag
let tags = document.getElementsByTagName("li");
console.log(tags);
for (let i = 0; i < tags.length; i++) {
  console.log(tags[i].innerText);
}

// class
let cls = document.getElementsByClassName("fruit");
console.log(cls);

// 선택자
let sel = document.querySelectorAll("ul > li");
console.log(sel);
