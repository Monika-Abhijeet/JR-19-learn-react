import Hello from "./components/hello";
import HeaderComponent from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div id="demo" className="demo-class">
      <HeaderComponent title="This is a react component header"></HeaderComponent>
      <Hello
        name="Monika Abhijeet"
        description="React is fun and intersting"
      ></Hello>
      <Footer email="abc@gmail.com"></Footer>
    </div>
  );
}

export default App;
