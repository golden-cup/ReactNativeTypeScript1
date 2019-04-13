import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

interface MyProps {
  text : string
}

interface MyState {
  isShowingText: boolean;
}

class Blink extends Component <MyProps, MyState> {
  constructor(props : MyProps) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink1' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}