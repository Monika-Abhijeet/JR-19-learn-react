import { Component } from "react";

class ChildLifecycle extends Component {
  constructor(props) {
    console.log("Child Constructor");
    console.log("****************************");
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  componentDidMount() {
    console.log("Child Component did mount");
    console.log("****************************");
  }
  shouldComponentUpdate() {
    console.log("child should component update");
    return true;
  }
  componentDidUpdate() {
    console.log("Child component did update");
    console.log("****************************");
  }
  render() {
    console.log("child render");
    console.log("****************************");

    return (
      <div>
        <h1>Child Component</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
  componentWillUnmount() {
    console.log("Child component will unmount");
    console.log("****************************");
  }
}

export default ChildLifecycle;
