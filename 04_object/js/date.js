// date 객체
// const now = new Date();
// console.log(now.getMonth());
// console.log(now.getDay());

// now.setFullYear(2020);
// now.setMonth(11);
// now.setDate(0);

// 달력

const drawCalender = (year, month) => {
  const now = new Date();
  let cal = `<table border='1'><caption>${year}년 ${month}월</caption>`;
  cal +=
    "<thead><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr></thead>";
  now.setFullYear(year, month, 0);
  end = now.getDate();
  now.setDate(1);
  start = now.getDay();
  cal += "<tbody><tr>";
  day = 1;
  let i;
  for (i = 0; i < start + end; i++) {
    if (i < start) {
      cal += "<td></td>";
    } else {
      cal += `<td>${day++}</td>`;
    }
    if (i % 7 == 6) {
      cal += "</tr><tr>";
    }
  }
  while (i % 7 != 0) {
    i++;
    cal += "<td></td>";
  }
  cal += "</tr></tbody></table>";
  return cal;
};

document.writeln(drawCalender(2025, 10));
document.writeln(drawCalender(2025, 11));
