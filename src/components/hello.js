function Hello(props) {
  let sayHello = (message) => {
    console.log(`hello ${message}`);
  };
  return (
    <div>
      <h4>Hello {props.name}, welcome to react class</h4>
      <p>{props.description} </p>
      <button onClick={() => sayHello("Monika")}>Click Me</button>
    </div>
  );
}

export default Hello;
