import React, { Component } from 'react'
import { View } from 'react-native'
import { 
	Container,
	List,
	ListItem,
	Text,
	CheckBox,
	Button
} from 'native-base'
import TodoItem from './TodoItem'

class TodoList extends Component {
	componentWillReceiveProps(nextProps){
		console.log('nextProps', nextProps)
	}
	listTodo(){
		const { todo } = this.props
		return ( 
			todo.map((obj, index)=>
				(
					<ListItem key={obj.id}>
						<CheckBox checked={ obj.isToggle } />
						<TodoItem value={obj.text}/>
						<Button small danger><Text> x </Text></Button>
						<Button small info transparent><Text> edit </Text></Button>
					</ListItem>
				)
			)
		)// return
	}

  render() {
    return (
      <View>
          <List>
				    { this.listTodo() }
          </List>
      </View>
    )
  }
}

export default TodoList