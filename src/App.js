import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Store from './Store'
import IndexContainer from './containers/IndexContainer'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <IndexContainer />
      </Provider>
    )
  }
}
export default App