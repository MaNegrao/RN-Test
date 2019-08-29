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
        <Text style={styles.text}>{ count }</Text>
        <Button style={styles.incrementButton} onPress={this.handleIncrement} color="green" title="+"></Button>
        <Button style={styles.decrementButton} onPress={this.handleDecrement} color="red" title="-"></Button>
        <Button style={styles.resetButton} onPress={this.reset} title="Reset"></Button>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 30,
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  resetButton:{
    fontSize: 15,
  },
  incrementButton:{
    fontSize: 15,
  },
  decrementButton:{
    fontSize: 15,
  }
});


export default Counter;