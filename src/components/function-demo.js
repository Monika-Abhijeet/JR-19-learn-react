function FunctionDemo(props) {
  var users = [
    {
      firstName: "Lavanya",
      lastName: "Dixit",
      age: 20,
    },
    {
      firstName: "Gaanavi",
      lastName: "Patil",
      age: 3,
    },
    {
      firstName: "Sharad",
      lastName: "Gudihal",
      age: 33,
    },
  ];
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={() => props.greet()}>Say Hello</button>
      {/* <p>Test</p>
      <ul>
        {users.map((user) => {
          <li>{user}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default FunctionDemo;
