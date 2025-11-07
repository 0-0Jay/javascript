let students = JSON.parse(localStorage.getItem("students"));

students.forEach((elem) => {
  const data = [elem.sno, elem.sname, elem.score, elem.phone, elem.email];
  let tr = makeRow(data);
  document.querySelector("#studentList").appendChild(tr);
});

document.querySelector("#addForm").addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 기능 차단
  let data = [
    document.querySelector("#f0").value,
    document.querySelector("#f1").value,
    document.querySelector("#f2").value,
    document.querySelector("#f3").value,
    document.querySelector("#f4").value,
  ];
  students.push({
    sno: document.querySelector("#f0").value,
    sname: document.querySelector("#f1").value,
    score: document.querySelector("#f2").value,
    phone: document.querySelector("#f3").value,
    email: document.querySelector("#f4").value,
  });
  localStorage.setItem("students", JSON.stringify(students));
  let tr = makeRow(data);
  document.querySelector("#studentList").appendChild(tr);
});

function makeRow(inputs) {
  let tr = document.createElement("tr");
  tr.addEventListener("click", () => {
    localStorage.setItem("info", inputs);
    location.href = "student.html";
  });
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
      for (let i = 0; i < students.length; i++) {
        if (students[i].sno == inputs[0]) {
          students.splice(i, 1);
          localStorage.setItem("students", JSON.stringify(students));
          e.target.parentElement.parentElement.remove();
          break;
        }
      }
    }
  });
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}
