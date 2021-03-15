import React from "react";
class State extends React.Component {
  state = {
    isOpen: "none",
    isOpenSub: "none",
  };

  handleClick = () => {
    if (this.state.isOpen === "none") {
      this.setState({ isOpen: "block" });
    } else {
      this.setState({ isOpen: "none" });
    }
  };

  handleSecondClick = () => {
    if (this.state.isOpenSub === "none") {
      this.setState({ isOpenSub: "block" });
    } else {
      this.setState({ isOpenSub: "none" });
    }
  };

  render() {
    return (
      <div>
        <h3 className="question"> Why is React great?</h3>
        <button onClick={this.handleClick}>+</button>
        <div style={{ display: this.state.isOpen }}>
          <p>Fast learning Curve</p>
          <button onClick={this.handleSecondClick}>+</button>
          <p style={{ display: this.state.isOpenSub }}>
            {" "}
            React is very a simple and lightweight library that only deals with
            the view layer. It is not a beast like other MV* frameworks such as
            Angular or Ember. Any Javascript developer can understand the basics
            and start developing an awesome web application after only a couple
            of days reading tutorial. As the React guide says ‘Thinking in
            React’ may be a little different than you used to since it brings a
            new approach to the table, but it will become much easier and
            natural as you gain experience with it.
          </p>
        </div>
      </div>
    );
  }
}

export default State;
