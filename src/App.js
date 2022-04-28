import Hello from "./components/hello";
import HeaderComponent from "./components/header";
import ClassDemo from "./components/class-demo";

function App() {
  return (
    <div id="demo" className="demo-class">
      <HeaderComponent title="This is a react component header"></HeaderComponent>
      <Hello
        name="Monika Abhijeet"
        description="React is fun and intersting"
      ></Hello>
      <ClassDemo email="abc@gmail.com"></ClassDemo>
    </div>
  );
}

export default App;
