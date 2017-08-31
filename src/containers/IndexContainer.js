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
import { fetchDataAction, addItemAction } from '../actions/IndexAction'

class IndexContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todo: [],
			text: ''
		}
	}

	componentDidMount() {
		this.props.onFetchData()
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			todo: nextProps.todo[0]
		})
	}

  render() {
    return (
			<Container>
        <View>
					<Navbars />
				</View>
        <View>
					<Item regular style={{ marginTop: 80, margin: 8 }}>
						<Input placeholder='Text' onChangeText={(e) => { this.setState({text: e}) }}/>
						<Button info transparent
							onPress={()=>this.props.onAddData(this.state.text)}
						><Text> add </Text></Button>
					</Item>

					{ this.state.todo.length > 0 ?
						<TodoList todo={this.state.todo}/> :
						<Text>Loading...</Text>
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
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)
