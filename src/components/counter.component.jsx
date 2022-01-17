import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  formatCount = () => {
    if (this.state.counter === 0) return "Zero";
    return this.state.counter;
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  handleDelete = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter === 0 });
    }
  };

  handleReset = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter === 0 });
      if (this.state.counter === 0) return "Zero";
      return this.state.counter;
    }
    if (this.state.counter === 0) return "Zero";
    return this.state.counter;
  };

  render() {
    return (
      <>
        {/* <button
          onClick={this.handleReset}
          type="button"
          class="btn btn-primary m-4"
        >
          Reset
        </button> */}

        <ul>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.formatCount()}</span>
              <button
                onClick={this.handleIncrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={this.handleDecrement}
                type="button"
                class="btn btn-secondary m-2"
              >
                -
              </button>
              <button
                onClick={this.handleDelete}
                type="button"
                class="btn btn-danger m-2"
              >
                Delete
              </button>
            </div>
          </li>
          {/* <li class="list-unstyled">
            <div>
              <span class="badge bg-primary">{this.state.items[0]}</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
          <li class="list-unstyled">
            <div>
              <span class="badge bg-primary p-2">Zero</span>
              <button type="button" class="btn btn-secondary m-2">
                +
              </button>
              <button type="button" class="btn btn-secondary m-2">
                -
              </button>
              <button type="button" class="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li> */}
        </ul>
      </>
    );
  }
}

export default Counter;
