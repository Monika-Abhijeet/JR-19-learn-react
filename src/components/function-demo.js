function FunctionDemo(props) {
  var users = [
    {
      id: 1,
      firstName: "Lavanya",
      lastName: "Dixit",
      age: 20,
    },
    {
      id: 2,
      firstName: "Gaanavi",
      lastName: "Patil",
      age: 3,
    },
    {
      id: 3,
      firstName: "Sharad",
      lastName: "Gudihal",
      age: 33,
    },
  ];
  return (
    <div>
      <h1>This is virtual dom demo 676576</h1>
      <h1>{props.title} test 123</h1>
      <button onClick={() => props.greet()}>Say Hello</button>
      <p>Test</p>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              My name is {user.firstName} {user.lastName} and age is {user.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FunctionDemo;
