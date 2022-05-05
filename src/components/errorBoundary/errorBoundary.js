import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    console.log(this.state);
    if (this.state.hasError) {
      return <h1 style={{ color: "red" }}>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
