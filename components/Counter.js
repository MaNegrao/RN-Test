import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Counter extends Component {

  state = {
    count: 0
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
      count: 0
    });
  }

  render(){
    const { count } = this.state;
    return (
      <View className="counter">
        <Text> Count: { count } </Text>
        <Button onPress={this.handleIncrement} color="green" title="+"></Button>
        <Button onPress={this.handleDecrement} color="red" title="-"></Button>
        <Button onPress={this.reset} title="Reset"></Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  textView: {
  },
});


export default Counter;