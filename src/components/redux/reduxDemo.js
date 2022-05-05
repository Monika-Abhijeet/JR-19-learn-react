import { useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";
function ReduxDemo() {
  return (
    <div>
      <h1>Redux Demo</h1>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
    </div>
  );
}
export default ReduxDemo;
