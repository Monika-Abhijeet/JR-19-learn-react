import { Component } from "react";
import updatedComponent from "./withCounter";
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.incrementCount()}>
          {this.props.name} Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default updatedComponent(Counter);
