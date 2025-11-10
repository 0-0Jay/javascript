async function postList() {
  const response = await fetch("http://localhost:3000/posts");
  const data = await response.json();
  console.log(data);
  let ul = document.querySelector("#list");
  data.forEach(({ id, title, author }) => {
    let li = document.createElement("li");
    let postId = document.createElement("span");
    postId.innerHTML = id;
    let postTitle = document.createElement("span");
    postTitle.innerHTML = title;
    let postAuthor = document.createElement("span");
    postAuthor.innerHTML = author;
    let postDelete = document.createElement("span");
    let button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", () => {
      deletePost(id);
    });
    postDelete.appendChild(button);
    li.appendChild(postId);
    li.appendChild(postTitle);
    li.appendChild(postAuthor);
    li.appendChild(postDelete);
    ul.appendChild(li);
  });
}
postList();

async function deletePost(id) {
  const response = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
}

async function uploadPost() {
  const data = {
    title: "sample data",
    author: `user${Math.ceil(Math.random() * 10)}`,
  };
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
