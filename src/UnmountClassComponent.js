import React, { Component } from "react";

class UnmountClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("mount");
    this.timerID = setInterval(() => this.tick(), 1000); // Update every second
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.timerID); // Clear interval when component unmounts to prevent memory leaks
  }

  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>You have been here for {this.state.count} seconds</h1>
      </div>
    );
  }
}

export default UnmountClassComponent;
