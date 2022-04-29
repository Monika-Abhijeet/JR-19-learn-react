import { useState } from "react";
function UseStateTutorial() {
  const [count, setCount] = useState(0);
  let incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Demo of useState</h1>
      <h3>Count is {count}</h3>
      <button onClick={() => incrementCount()}>Increment</button>
    </div>
  );
}
export default UseStateTutorial;
