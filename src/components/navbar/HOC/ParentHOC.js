import { Component } from "react";
import Counter from "./counter";
import HoverCounter from "./HoverCounter";

class ParentHOC extends Component {
  render() {
    return (
      <div>
        <Counter name="Monika" />
        <HoverCounter name="Gaanavi" />
      </div>
    );
  }
}
export default ParentHOC;
