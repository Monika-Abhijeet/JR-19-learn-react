import { useReducer } from "react";

function UseReducerDemo() {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "MULTIPLY":
        return { count: state.count * action.num };
    }
  };
  const [state, dispatch] = useReducer(counterReducer, { count: 0, name: "" });

  return (
    <div>
      <h1>Use Reducer Demo</h1>
      <h2> Counter : {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "MULTIPLY", num: 10 })}>
        MULTIPLY
      </button>
    </div>
  );
}
export default UseReducerDemo;
