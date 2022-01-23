import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    if (this.state.counter === 0) return "Zero";
    return this.state.counter;
  };

  // handleIncrement = (id) => {
  //   const counters = this.state.counters.map((counter, idx) => {
  //     if (counter.id === id) {
  //       return { id: idx, value: counter.value + 1 };
  //     }
  //   });
  //   this.setState({ counters: counters });
  // };

  // handleDecrement = (id) => {
  //   const counters = this.state.counters.map((counter, idx) => {
  //     if (counter.id === id) {
  //       return { id: idx, value: counter.value - 1 };
  //     }
  //   });
  //   this.setState({ counters: counters });
  // };

  // handleDelete = () => {
  //   if (this.state.counter > 0) {
  //     this.setState({ counter: this.state.counter === 0 });
  //   }
  // };

  // handleReset = () => {
  //   if (this.state.counter > 0) {
  //     this.setState({ counter: this.state.counter === 0 });
  //     if (this.state.counter === 0) return "Zero";
  //     return this.state.counter;
  //   }
  //   if (this.state.counter === 0) return "Zero";
  //   return this.state.counter;
  // };

  render() {
    return (
      <>
        <ul>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-primary m-2">{this.props.value}</span>
              <button
                onClick={() => this.props.onIncrement(this.props.id)}
                type="button"
                className="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                onClick={() => this.props.onDecrement(this.props.id)}
                type="button"
                className="btn btn-secondary m-2"
              >
                -
              </button>
              <button
                onClick={() => this.props.onDelete(this.props.id)}
                type="button"
                className="btn btn-danger m-2"
              >
                Delete
              </button>
            </div>
          </li>
          {/* <li className="list-unstyled">
            <div>
              <span className="badge bg-primary">{this.state.items[0]}</span>
              <button type="button" className="btn btn-secondary m-2">
                +
              </button>
              <button type="button" className="btn btn-secondary m-2">
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
                Delete
              </button>
            </div>
          </li>
          <li className="list-unstyled">
            <div>
              <span className="badge bg-primary p-2">Zero</span>
              <button type="button" className="btn btn-secondary m-2">
                +
              </button>
              <button type="button" className="btn btn-secondary m-2">
                -
              </button>
              <button type="button" className="btn btn-danger m-2">
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
