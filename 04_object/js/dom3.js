// event 등록
document.querySelectorAll("#itemList > li").forEach((elem) => {
  console.log(elem);
  elem.addEventListener("mouseover", () => (elem.style.color = "red"));
  elem.addEventListener("mouseout", () => (elem.style.color = "black"));
});

document.querySelector("#addBtn").addEventListener("click", function () {
  let item = document.querySelector("#addInput").value;
  if (item) {
    let li = document.createElement("li");
    li.addEventListener("mouseover", () => (li.style.color = "red"));
    li.addEventListener("mouseout", () => (li.style.color = "black"));
    let txt = document.createTextNode(item);
    li.appendChild(txt);
    document.getElementById("itemList").appendChild(li);
    document.getElementById("addInput").value = "";
  } else {
    alert("값 입력");
  }
});
