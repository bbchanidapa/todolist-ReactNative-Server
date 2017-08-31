/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import App from './src/App'

export default class reduxJsonServer extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column'}}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('reduxJsonServer', () => reduxJsonServer);
