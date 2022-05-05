import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, signin, signout } from "./actions";
function ReduxDemo() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div>
      <h1>Redux Demo</h1>
      <h2>Counter {counter}</h2>
      {isLogged ? <p>This is a sensitive data</p> : ""}
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(signin())}>SIGNIN</button>
      <button onClick={() => dispatch(signout())}>SINGOUT</button>
    </div>
  );
}
export default ReduxDemo;
