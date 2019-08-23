import React, { Component } from 'react';

class Counter extends Component {

  state = {
    count: 15
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset = () => {
    // you can also pass in a function to setState
    this.setState({
      count: 52
    });
  }

  render() {
    const { count } = this.state;
    return (
      <View className="counter">
        <Text> Count: { count } </Text>
        <Button onClick={this.handleIncrement}> + </Button>
        <Button onClick={this.handledDecrement}> - </Button>
        <Button onClick={this.reset}> Reset </Button>
      </View>
  }

}


export default Counter;