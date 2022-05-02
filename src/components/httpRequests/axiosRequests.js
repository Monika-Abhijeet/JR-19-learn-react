import axios from "axios";

function AxiosRequests() {
  let getPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res.data));
  };

  let post = () => {
    let requestBody = {
      title: "title one",
      body: "description of title one",
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", requestBody)
      .then((res) => console.log(res.data));
  };

  let getUser = () => {
    axios
      .get("http://localhost:8080/employee")
      .then((res) => console.log(res.data));
  };
  let postUser = () => {
    let requestBody = {
      name: "Monika",
      designation: "CEO",
      salary: 90000,
    };
    axios
      .post("http://localhost:8080/addemployee", requestBody)
      .then((res) => console.log(res.data));
  };
  return (
    <div>
      <h1>Axios Requests</h1>
      <button onClick={() => getPosts()}>Get posts</button>
      <button onClick={() => post()}>Post</button>
      <button onClick={() => getUser()}>get user</button>
      <button onClick={() => postUser()}>post user</button>
    </div>
  );
}

export default AxiosRequests;
