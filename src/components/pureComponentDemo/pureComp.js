import { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("************** Pure Component Render ************** ");

    return <div>Pure Compoenent {this.props.name}</div>;
  }
}

export default PureComp;
