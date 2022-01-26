import React, { Component } from "react";
import Counters from "./counters.component";
import Navbar from "./navbar.component";
import Reset from "./reset.component";
import Movies from "./movies.component";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (id) => {
    const counters = this.state.counters.map((counter, idx) => {
      if (counter.id === id) return { id: idx, value: counter.value + 1 };
      return counter;
    });
    this.setState({ counters: counters });
  };

  handleDecrement = (id) => {
    const counters = this.state.counters.map((counter, idx) => {
      if (counter.id === id) return { id: idx, value: counter.value - 1 };
      return counter;
    });
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const all_counters = this.state.counters.map((counter, idx) => ({
      id: idx,
      value: 0,
    }));
    this.setState({ counters: all_counters });
  };
  getNonZeroItems = () => {
    let cnt = 0;
    this.state.counters.forEach((counter) => {
      if (counter.value > 0) cnt++;
    });
    return cnt;
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((counter) => counter.id != id);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <>
        {/* <Navbar noZeroItems={this.getNonZeroItems()} />
        <Reset onReset={this.handleReset} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        /> */}
        <Movies />
      </>
    );
  }
}

export default App;
