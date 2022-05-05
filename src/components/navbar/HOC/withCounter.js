import { Component } from "react";
import { increment } from "../../redux/actions";

const updatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      console.log(this.props);
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.increment}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default updatedComponent;
