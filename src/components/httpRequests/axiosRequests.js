import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useEffect, useState } from "react";

function AxiosRequests() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  let getPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
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

  //   let getUser = () => {
  //     axios
  //       .get("http://localhost:8080/employee")
  //       .then((res) => console.log(res.data));
  //   };
  //   let postUser = () => {
  //     let requestBody = {
  //       name: "Monika",
  //       designation: "CEO",
  //       salary: 90000,
  //     };
  //     axios
  //       .post("http://localhost:8080/addemployee", requestBody)
  //       .then((res) => console.log(res.data));
  //   };
  return (
    <div>
      <h1>Axios Requests</h1>
      {/* <button onClick={() => getPosts()}>Get posts</button> */}
      <button onClick={() => post()}>Post</button>
      {/* <button onClick={() => getUser()}>get user</button>
      <button onClick={() => postUser()}>post user</button> */}
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              {post.id} {post.title}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AxiosRequests;
