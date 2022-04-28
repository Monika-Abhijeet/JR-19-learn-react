import { Component } from "react";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Monika",
      lastName: "Abhijeet",
    };
  }
  sayHello = () => {
    console.log("HIIIII", this.state.firstName);
  };
  changeFirstName = (name) => {
    this.setState({ firstName: name });
  };
  render() {
    return (
      <div>
        <p>{this.props.email}</p>
        <p>First name is {this.state.firstName}</p>
        <button onClick={() => this.sayHello()}>say Hi</button>
        <button onClick={() => this.changeFirstName("Gowri")}>
          Change Name
        </button>
      </div>
    );
  }
}
export default Footer;
