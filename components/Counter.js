import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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

  render(){
    const { count } = this.state;
    return (
      <View className="counter">
        <Text> Count: { count } </Text>
        <Button onPress={this.handleIncrement}> + </Button>
        <Button onPress={this.handledDecrement}> - </Button>
        <Button onPress={this.reset}> Reset </Button>
      </View>
    )
  }

}


export default Counter;