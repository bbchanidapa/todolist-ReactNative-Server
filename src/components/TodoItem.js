import React, { Component } from 'react'
import { Text, View } from 'react-native'

class TodoItem extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.value} </Text>
      </View>
    )
  }
}

export default TodoItem