import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native'
import {
	Container,
	Content,
	Text,
	Title,
	Item,
	Input,
	Header,
	Body,
	Right,
	Left,
	Button,
	Footer,
	FooterTab
}from 'native-base'
import Navbars from '../components/Navbars'
import TodoList from '../components/TodoList'
import { fetchDataAction, addItemAction, deleteItemAction, updateItemAction } from '../actions/IndexAction'

class IndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			value: '',
			id: 0,
			mode: 'MODE_ADD'
		}
	}

	componentDidMount() {
		this.props.onFetchData()
	}

	onDeleteItem(data){
		this.props.onDeleteData(data)
	}

	onEditItem(data){
		this.setState({
			id: data.id,
			value: data.text,
			mode: 'MODE_EDIT'
		})
	}

  render() {
    return (
			<Container>
        <View>
					<Navbars />
				</View>
        <View>
					{ this.state.mode == 'MODE_ADD' ?
						<View>
							<Item regular style={{ marginTop: 80, margin: 8 }}>
								<Input placeholder='Text' onChangeText={(e) => { this.setState({text: e}) }}/>
								<Button info transparent
									onPress={()=>this.props.onAddData(this.state.text)}
								><Text> add </Text></Button>
							</Item> 
							<TodoList todo={this.props.todo} onDeleteItem={(e)=> this.onDeleteItem(e)} onEditItem={(e)=> this.onEditItem(e)}/>
						</View>
						:
						<View>
							<Item regular style={{ marginTop: 80, margin: 8 }}>
								<Input 
									value={this.state.value} 
									onChangeText={(e) => { this.setState({value: e}) }}/>
								<Button info transparent
									onPress={()=> {
										this.props.onUpdateData({id: this.state.id, text: this.state.value})
										this.setState({mode: 'MODE_ADD'})
										}
									}
								><Text> save </Text></Button>
							</Item> 
						</View>

					}

				</View>
      </Container>
    )
  }
} 

mapStateToProps = (state) => {
	return { todo: state.todo }
}
mapDispatchToProps = (dispatch, ownProps) => ({
	onFetchData: (data) => {
		dispatch(fetchDataAction(data))
	},
	onAddData: (data) => {
		dispatch(addItemAction(data))
	},
	onDeleteData: (id) => {
		dispatch(deleteItemAction(id))
	},
	onUpdateData: (data) => {
		dispatch(updateItemAction(data))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)
