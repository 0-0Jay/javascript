// login.js
const db = [
  { userId: "user01", password: "1111" },
  { userId: "user02", password: "2222" },
  { userId: "user03", password: "3333" },
];
const students = [
  {
    sno: 100,
    sname: "홍길동",
    score: 90,
    phone: "010-1111-1111",
    email: "hong@email.com",
  },
  {
    sno: 101,
    sname: "유관순",
    score: 85,
    phone: "010-2222-2222",
    email: "you@email.com",
  },
  {
    sno: 102,
    sname: "이순신",
    score: 95,
    phone: "010-3333-3333",
    email: "lee@email.com",
  },
];

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  if (!check(userId, password)) {
    alert("아이디가 존재하지 않거나 비밀번호가 틀렸습니다.");
    location.reload();
  } else {
    if (!localStorage.getItem("students")) {
      localStorage.setItem("students", JSON.stringify(students));
    }
    location.href = "form.html";
  }
});

function check(id, pw) {
  for (user of db) {
    if (user.userId == id && user.password == pw) return true;
  }
  return false;
}
