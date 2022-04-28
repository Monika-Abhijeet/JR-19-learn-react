import Hello from "./components/hello";
import Header from "./components/header";

function App() {
  return (
    <div id="demo" className="demo-class">
      <h1>
        This is demo of parent and child where App is a parent and Hello is a
        child
      </h1>
      <Hello></Hello>
      <Header></Header>
    </div>
  );
}

export default App;
