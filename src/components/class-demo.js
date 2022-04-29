import { Component } from "react";

class ClassDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      message: "Welcome visitor",
      title: this.props.title,
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
  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Title is {this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={(e) => this.changeTitle(e)}
        />
        {/* <h2>{this.props.title}</h2> */}
      </div>
      // <div>
      //   <p>{this.props.email}</p>
      //   <p>First name is {this.state.firstName}</p>
      //   <h1>{this.state.message}</h1>
      //   <button onClick={() => this.sayHello()}>say Hi</button>
      //   <button onClick={() => this.changeFirstName("Gowri")}>
      //     Change Name
      //   </button>
      //   <button onClick={() => this.subscribe("Thanks for subscribing")}>
      //     Subscribe
      //   </button>
      //   <br />
      //   <div>
      //     <label htmlFor="firstName">First Name</label>
      //     <input
      //       type="text"
      //       id="firstName"
      //       name="firstName"
      //       value={this.state.firstName}
      //       onChange={(event) => this.setName(event)}
      //     />
      //   </div>
      // </div>
    );
  }
}
export default ClassDemo;
