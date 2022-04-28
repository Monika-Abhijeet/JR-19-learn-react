import { Component } from "react";

class ClassDemo extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      message: "Welcome visitor",
    };
  }
  sayHello = () => {
    console.log("HIIIII", this.state.firstName);
  };
  changeFirstName = (name) => {
    this.setState({ firstName: name });
  };
  subscribe = (msg) => {
    this.setState({ message: msg });
  };

  setName = (event) => {
    console.log(event.target.value);
    this.setState({ firstName: event.target.value });
  };
  render() {
    return (
      <div>
        <p>{this.props.email}</p>
        <p>First name is {this.state.firstName}</p>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.sayHello()}>say Hi</button>
        <button onClick={() => this.changeFirstName("Gowri")}>
          Change Name
        </button>
        <button onClick={() => this.subscribe("Thanks for subscribing")}>
          Subscribe
        </button>
        <br />
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={this.state.firstName}
            onChange={(event) => this.setName(event)}
          />
        </div>
      </div>
    );
  }
}
export default ClassDemo;
