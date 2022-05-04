import { useRef } from "react";

function UseRefDemo() {
  const inputRef = useRef(null);
  let focusInput = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>Use Ref Demo</h1>
      <div>
        <label>Enter Name</label>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            focusInput();
          }}
        >
          Focus input
        </button>
      </div>
    </div>
  );
}

export default UseRefDemo;
