import { QrCodeScannerOutlined } from "@mui/icons-material";
import { Component } from "react";
import ChildLifecycle from "./ChildLifeCycle";

class ParentLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
    };
    console.log("parent constructor");
    console.log("****************************");
  }
  componentDidMount() {
    console.log("parent component did mount");
    console.log("****************************");
  }
  mountCounter = () => {
    this.setState({ mount: true });
  };
  unmountCounter = () => {
    console.log("unmounted");
    this.setState({ mount: false });
  };
  render() {
    console.log("parent rendor");
    console.log("****************************");

    return (
      <div>
        Parent Lifecycle
        <button onClick={() => this.mountCounter()} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button
          onClick={() => this.unmountCounter()}
          disabled={!this.state.mount}
        >
          Unmount Counter
        </button>
        {this.state.mount ? <ChildLifecycle /> : null}
      </div>
    );
  }
}

export default ParentLifeCycle;
