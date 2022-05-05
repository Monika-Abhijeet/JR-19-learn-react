import { Component } from "react";
import updatedComponent from "./withCounter";
class HoverCounter extends Component {
  render() {
    return (
      <div>
        <p onMouseOver={() => this.props.incrementCount()}>
          {this.props.name} Hovered {this.props.count}times
        </p>
      </div>
    );
  }
}

export default updatedComponent(HoverCounter);
