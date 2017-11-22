import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import MainNavigator from './MainNavigator'

class App extends Component {

  async componentWillMount() {
    await Expo.Font.loadAsync({
     
    });
  }
  render() {
    return (
      <MainNavigator/>
    )
	}
}

export default App
