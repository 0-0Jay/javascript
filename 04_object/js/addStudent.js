const students = [
  { sno: 100, sname: "홍길동", score: 90 },
  { sno: 101, sname: "유관순", score: 85 },
  { sno: 102, sname: "이순신", score: 95 },
];

students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score];
  let tr = makeRow(data);
  document.querySelector("#studentList").appendChild(tr);
});

document.querySelector("#addForm").addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 기능 차단
  let data = [
    document.querySelector("#f0").value,
    document.querySelector("#f1").value,
    document.querySelector("#f2").value,
  ];
  let tr = makeRow(data);
  document.querySelector("#studentList").appendChild(tr);
});

function makeRow(inputs) {
  let tr = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    let td = document.createElement("td");
    let txt = document.createTextNode(inputs[i]);
    td.appendChild(txt);
    tr.appendChild(td);
  }
  //삭제버튼
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "삭제";
  btn.addEventListener("click", (e) => {
    if (confirm("삭제하겠습니까?")) {
      e.target.parentElement.parentElement.remove();
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}
