import { useEffect, useState } from "react";
function UseEffectDemo(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);
  return (
    <div>
      <h1>Use Effect Demo</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <h3> Name is : {name}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseEffectDemo;
