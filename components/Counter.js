import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 15
  }

  render() {
    const { count } = this.state;
    return (
      <section className="counter">
        <h1> Count: { count } </h1>
        <button className="full-width"> Increment </button>
        <button className="full-width"> Decrement </button>
        <button className="full-width"> Reset </button>
      </section>
    );
  }
}

export default Counter;