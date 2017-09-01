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
	listTodo(){
		const { todo, onDeleteItem, onEditItem } = this.props
		return ( 
			todo.map((data, index)=>
				(
					<ListItem key={index}>
						<CheckBox checked={data.isToggle}/>
						<TodoItem value={data.text}/>
						<Button small danger
							onPress={()=> onDeleteItem(data)}
						><Text> x </Text></Button>
						<Button small info transparent	
							onPress={()=> onEditItem(data)}
						><Text> edit </Text></Button>
					</ListItem>
				)
			)
		)
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