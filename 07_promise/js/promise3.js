// fetch -> then -> then -> then ...
fetch("http://localhost:3000/posts")
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let post of data) {
      let li = document.createElement("li");
      li.innerHTML = `<span>${post.id}</span><span>${post.title}</span><span>${post.author}</span>`;
      document.querySelector("#list").appendChild(li);
    }
  })
  .catch((err) => console.log(err));

// async, await
async function postList() {
  try {
    const result = await fetch("http://localhost:3000/posts");
    const data = await result.json();

    console.log(data);
    for (let { id, title, author } of data) {
      let li = document.createElement("li");
      li.innerHTML = `<span>${id}</span><span>${title}</span><span>${author}</span>`;
      document.querySelector("#list").appendChild(li);
    }
  } catch (err) {
    console.log("예외발생 : ", err);
  }
}
postList();
