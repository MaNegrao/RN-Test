import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Counter extends Component {

  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count == 12 ? 0 : this.state.count + 1
    });
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count == 0 ? 0 : this.state.count - 1
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
        <Text style={styles.text}> Count: { count } </Text>
        <Button onPress={this.handleIncrement} color="green" title="+"></Button>
        <Button onPress={this.handleDecrement} color="red" title="-"></Button>
        <Button style={styles.resetButton} onPress={this.reset} title="Reset"></Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  resetButton:{
    fontSize: 15,
  },
  incrementButton:{
    fontSize: 15 
  },
  decrementButton:{
    fontSize: 15
  }
});


export default Counter;