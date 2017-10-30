import React, { Component } from 'react'
import { View } from 'react-native'
import { 
	Container,
	List,
	ListItem,
	Text
} from 'native-base'
import Mascot from 'mascot'
const { Components } = Mascot
const { 
    TextField,
		Checkbox,
		Button
} = Components
import TodoItem from './TodoItem'

class TodoList extends Component {
	listTodo(){
		const { todo, onDeleteItem, onEditItem } = this.props
		return ( 
			todo.map((data, index)=>
				(
					<ListItem key={index}>
						<Checkbox 
            	isChecked={data.isToggle}
            	action={() =>  onEditItem({data: data, abount: 'toggle'}) }
          	/>
						<TodoItem value={data.text}/>
						<Button
							title={'x'}
							theme="danger"
							width={40}
							action={() => onDeleteItem(data)}
						/>
						<Button
							title={'edit'}
							theme="primary"
							width={60}
							action={() => onEditItem({data: data, abount: 'text'})}
						/>
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