import { Component, PureComponent } from "react";
import PureComp from "./pureComp";
import RegComp from "./regComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "Monika",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Monika",
      });
    }, 3000);
  }
  render() {
    console.log("************** Parent Component Render ************** ");
    return (
      <div>
        <h1>Parent Compoenent</h1>
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
