import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,  TouchableOpacity } from 'react-native';

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

  render(){
    const { count } = this.state;
    return (
      <View style={styles.container} className="counter">
        <Text style={styles.text}>{ count }</Text>
        <TouchableOpacity style={styles.incrementButton} onPress={this.handleIncrement}>
         <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.decrementButton} onPress={this.handleDecrement}>
         <Text style={styles.buttonText}> - </Text>
        </TouchableOpacity>
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
    fontSize: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  resetButton:{
    fontSize: 15,
  },
  incrementButton:{
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10
  },
  decrementButton:{
    fontSize: 15,
  },
  buttonText:{
    color: 'white',
    fontSize: 40,
  }
});


export default Counter;