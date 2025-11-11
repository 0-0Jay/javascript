let bookList = [
  {
    bookNo: "001",
    title: "모던 자바스크립트 기초",
    author: "김모던",
    price: 20000,
  },
  {
    bookNo: "002",
    title: "자바스크립트 핵심가이드",
    author: "알베르토",
    price: 22000,
  },
];

// 리스트 불러오기
const showList = () => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  bookList.forEach(({ bookNo, title, author, price }) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let chkBox = document.createElement("input");
    chkBox.type = "checkbox";
    chkBox.addEventListener("click", (e) => {
      let chkList = document.querySelectorAll("tbody input[type='checkbox']");
      let flag = [];
      chkList.forEach((elem) => {
        flag.push(elem.checked);
      });
      if (flag.every((e) => e === true)) {
        document.querySelector("#checkAll").checked = true;
      } else {
        document.querySelector("#checkAll").checked = false;
      }
    });
    td.appendChild(chkBox);
    tr.appendChild(td);
    let data = [bookNo, title, author, price];
    for (let d of data) {
      let td = document.createElement("td");
      td.innerText = d;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
};
showList();

// 등록버튼
document.querySelector("#add").addEventListener("click", (e) => {
  e.preventDefault();
  let bookNo = document.getElementById("bookNo").value;
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let price = document.getElementById("price").value;
  document.getElementById("bookNo").value = "";
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("price").value = "";
  bookList.push({
    bookNo: bookNo,
    title: title,
    author: author,
    price: price,
  });
  showList();
});

// 체크박스
document.querySelector("#checkAll").addEventListener("change", (e) => {
  document
    .querySelectorAll("tbody input[type='checkbox']")
    .forEach((elem) => (elem.checked = e.target.checked));
});

// 선택삭제
document.querySelector("#del").addEventListener("click", (e) => {
  let checkedList = document.querySelectorAll("tbody input[type='checkbox']");
  let newList = [];
  for (let i = 0; i < checkedList.length; i++) {
    if (!checkedList[i].checked) {
      newList.push(bookList[i]);
    }
  }
  bookList = newList;
  showList();
});

// 체크박스 전체 선택
document.querySelector("tbody input[type='checkbox']");
