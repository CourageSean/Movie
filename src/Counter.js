import React from "react";

class Counter extends React.Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  reset = () => {
    this.setState({ counter: 0 });
  };
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{this.state.counter} </span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default Counter;
