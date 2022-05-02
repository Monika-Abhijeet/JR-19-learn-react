function HttpRequest() {
  let getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  let postUser = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "title one",
        body: "description of title one",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  let updatePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "new title",
        body: "we have updated the content",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  let patchTitle = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "test title",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  let deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <div>
      <h1>Http request</h1>
      <button onClick={() => getUser()}>Get user</button>
      <button onClick={() => postUser()}>Post User</button>
      <button onClick={() => updatePost()}>Update Post</button>
      <button onClick={() => patchTitle()}> Patch title</button>
      <button onClick={() => deletePost()}>Delete Post</button>
    </div>
  );
}

export default HttpRequest;
