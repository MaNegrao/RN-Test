import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Counter extends Component {

  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count == 11 ? 0 : this.state.count + 1
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
      <View style={styles.container} className="counter">
        <Text style={styles.text}> Count: { count } </Text>
        <Button style={styles.incrementButton} onPress={this.handleIncrement} color="green" title="+"></Button>
        <Button style={styles.decrementButton} onPress={this.handleDecrement} color="red" title="-"></Button>
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
    margin: 10,
    fontSize: 15,
  },
  incrementButton:{
    margin: 10,
    fontSize: 15 
  },
  decrementButton:{
    margin: 10,
    fontSize: 15
  }
});


export default Counter;