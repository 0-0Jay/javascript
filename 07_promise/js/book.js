const bookList = [
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

const showList = () => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  bookList.forEach(({ bookNo, title, author, price }) => {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = "<input type='checkbox' >";
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

let button = document.querySelector("button").addEventListener("click", (e) => {
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

document.querySelector("#checkAll").addEventListener("click", (e) => {
  if (e.target.checked) {
    document
      .querySelectorAll("tbody input")
      .forEach((elem) => (elem.checked = true));
  } else {
    document
      .querySelectorAll("tbody input")
      .forEach((elem) => (elem.checked = false));
  }
});
