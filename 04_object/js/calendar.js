let yyyy = document.querySelector('input[name="yyyy"]').value;
let mm = document.querySelector('input[name="mm"]').value;

// 헤더부분
function showHeader() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let tr = document.createElement("tr");
  for (let day of days) {
    let th = document.createElement("th");
    if (day == "Sun") {
      th.className = "sunday";
    } else if (day == "Sat") {
      th.className = "saturday";
    }
    th.innerText = day;
    tr.appendChild(th);
  }
  document.querySelector("table>thead").appendChild(tr);
}
showHeader();

document.querySelector('input[name="yyyy"]').addEventListener("change", (e) => {
  // console.log(e.target.value);
  yyyy = e.target.value;
  showCalender(yyyy, mm);
});

document.querySelector('input[name="mm"]').addEventListener("change", (e) => {
  // console.log(e.target.value);
  mm = e.target.value;
  showCalender(yyyy, mm);
});

function showCalender(year, month) {
  // 기존 테이블 제거
  document.querySelector("tbody").innerHTML = "";
  // console.log(year, month);
  const now = new Date();
  now.setFullYear(year, month, 0);
  let end = now.getDate();
  now.setDate(1);
  let start = now.getDay();
  tr = document.createElement("tr");
  let day = 1;
  let i;
  for (i = 0; i < start + end; i++) {
    if (i < start) {
      tr.appendChild(document.createElement("td"));
    } else {
      let td = document.createElement("td");
      td.innerText = day++;
      tr.appendChild(td);
      if (i % 7 == 6) {
        td.className = "saturday";
      } else if (i % 7 == 0) {
        td.className = "sunday";
      }
    }
    if (i % 7 == 6) {
      document.querySelector("table>tbody").appendChild(tr);
      tr = document.createElement("tr");
    }
  }
  while (i % 7 != 0) {
    i++;
    tr.appendChild(document.createElement("td"));
  }
  document.querySelector("table>tbody").appendChild(tr);
}
showCalender(yyyy, mm);
