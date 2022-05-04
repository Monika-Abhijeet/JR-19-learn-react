import { useState } from "react";
function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  let changeName = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  let clickCheckbox = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Hooks</h1>
      <h2>demo of useState</h2>
      <h3>Counter : {count}</h3>
      <button className="btn btn-primary" onClick={() => increment()}>
        Increment
      </button>
      <button className="btn btn-primary" onClick={() => decrement()}>
        Decrement
      </button>
      <h3>My name is : {name}</h3>
      <input type="text" value={name} onChange={(e) => changeName(e)} />
      <br />
      <input
        type="checkbox"
        value={isChecked}
        onChange={(e) => clickCheckbox(e)}
      />
      <label> agree to terms and conditions</label>
    </div>
  );
}

export default UseStateDemo;
