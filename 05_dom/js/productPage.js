const categories = [
  "전체",
  "전자기기",
  "주변기기",
  "사무용품",
  "모바일기기",
  "음향기기",
  "액세서리",
];
// 카테고리에 옵션 추가
const categorySelect = document.querySelector(".categories");
categories.forEach((elem) => {
  const option = document.createElement("option");
  option.value = categories.indexOf(elem);
  option.textContent = elem;
  categorySelect.appendChild(option);
});

// 검색어, 카테고리, 페이지 관련 전역변수
let category = 0;
let search = "";
let page = 1;
let pagination = document.querySelector("div.pagination");
let endPage = Math.ceil(page / 10) * 5;
let startPage = endPage - 4;

// 카테고리가 변경될 때 이벤트 호출
categorySelect.addEventListener("change", (e) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector(".pagination").innerHTML = "";
  category = e.target.value;
  page = 1;
  endPage = Math.ceil(page / 10) * 5;
  startPage = endPage - 4;
  showTable(search, category, page);
  showPagingList();
});

// 텍스트에서 키보드 입력이 발생하면 이벤트 호출
document.querySelector(".text").addEventListener("keyup", (e) => {
  document.querySelector("#tbody").innerHTML = "";
  document.querySelector(".pagination").innerHTML = "";
  search = e.target.value;
  page = 1;
  endPage = Math.ceil(page / 10) * 5;
  startPage = endPage - 4;
  showTable(search, category, page);
  showPagingList();
});

// 페이징
document.querySelector("div.pagination").addEventListener("click", (e) => {
  if (e.target.nodeName == "A") {
    if (Number(e.target.innerText)) {
      page = Number(e.target.innerText);
    }
    document.querySelector("tbody").innerHTML = "";
    showTable(search, category, page);
    showPagingList();
  }
});

// 아이템 목록 생성
let arr = [];
showTable(search, category, page); // 화면 로드 시 즉시 전체 테이블출력
function showTable(search, category) {
  // 검색 조건에 맞는 아이템 리스트 arr에 저장
  arr = [];
  if (category == 0) {
    for (let pd of products) {
      if (pd.productName.includes(search)) {
        arr.push([
          pd.productCode,
          pd.productName,
          pd.purchasePrice,
          pd.category,
        ]);
      } else {
      }
    }
  } else {
    for (let pd of products) {
      if (
        pd.category == categories[category] &&
        pd.productName.includes(search)
      ) {
        arr.push([
          pd.productCode,
          pd.productName,
          pd.purchasePrice,
          pd.category,
        ]);
      }
    }
  }
  let start = (page - 1) * 5;
  let end = page * 5;
  for (let i = start; i < end; i++) {
    let tr = document.createElement("tr");
    if (i < arr.length) {
      for (let j = 0; j < 4; j++) {
        let td = document.createElement("td");
        let txt = document.createTextNode(arr[i][j]);
        td.appendChild(txt);
        tr.appendChild(td);
      }
      document.querySelector("tbody").appendChild(tr);
    }
  }
}

// 페이징 목록 생성함수
function showPagingList(totalCount = products.length) {
  pagination.innerHTML = "";
  let prev = false;
  let next = false;
  // 페이지 넘버 컨트롤
  let realEnd = Math.ceil(totalCount / 5);
  if (endPage > realEnd) {
    endPage = realEnd;
  }
  if (startPage != 1) {
    prev = true;
  }
  if (endPage < realEnd) {
    next = true;
  }
  // 이전 페이지
  let tag = document.createElement("a");
  tag.innerHTML = "&laquo;";
  tag.href = "#";
  tag.className = "disabled";
  pagination.appendChild(tag);
  if (prev) {
    tag.className = "";
    tag.addEventListener("click", () => {
      startPage -= 5;
      endPage -= 5;
      page = startPage;
      showTable(search, category, page);
    });
  }
  // 페이징 목록
  for (let p = startPage; p <= endPage; p++) {
    let tag = document.createElement("a");
    tag.innerText = p;
    tag.href = "#";
    tag.setAttribute("data-page", p);
    if (p == page) {
      tag.className = "active";
    }
    pagination.appendChild(tag);
  }
  // 이후 페이지
  tag = document.createElement("a");
  tag.innerHTML = "&raquo;";
  tag.href = "#";
  tag.className = "disabled";
  pagination.appendChild(tag);
  if (next) {
    tag.className = "";
    tag.addEventListener("click", () => {
      startPage += 5;
      endPage += 5;
      page = startPage;
      showTable(search, category, page);
    });
  }
}
showPagingList(); // 화면 로드시 즉시 페이징 목록 생성
