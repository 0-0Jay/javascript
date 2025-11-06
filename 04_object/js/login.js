// login.js
const db = [
  { userId: "user01", password: "1111" },
  { userId: "user02", password: "2222" },
  { userId: "user03", password: "3333" },
];

document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let userId = document.getElementById("userId").value;
  let password = document.getElementById("password").value;
  if (!check(userId, password)) {
    alert("아이디가 존재하지 않거나 비밀번호가 틀렸습니다.");
    document.getElementById("userId").value = "";
    document.getElementById("password").value = "";
  } else {
    location.href = "form.html";
  }
});

function check(id, pw) {
  for (user of db) {
    if (user.userId == id && user.password == pw) return true;
  }
  return false;
}
