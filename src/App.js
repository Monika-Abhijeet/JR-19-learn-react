import Hello from "./components/hello";
import HeaderComponent from "./components/header";
import ClassDemo from "./components/class-demo";
import FunctionDemo from "./components/function-demo";
import MaterialUI from "./components/material-ui";

function App() {
  let onGreet = () => {
    alert("Hello! Good morning");
  };
  return (
    <div id="demo" className="demo-class">
      <FunctionDemo title="functional Component" greet={onGreet}></FunctionDemo>
      <MaterialUI></MaterialUI>
      {/* <ClassDemo
        email="abc@gmail.com"
        title="title from the parent"
      ></ClassDemo> */}
    </div>
  );
}

export default App;
