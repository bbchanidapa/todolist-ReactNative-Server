import React, { Component } from 'react'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import Mascot from 'mascot'
const { Components } = Mascot
const { 
    TextField,
    Button
} = Components
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

	onEditItem(res){
		if(res.abount == 'text'){
			this.setState({
				id: res.data.id,
				value: res.data.text,
				isToggle: res.data.isToggle,
				mode: 'MODE_EDIT'
			})
		}else{
			this.setState({
				mode: 'MODE_ADD'
			})
			this.props.onUpdateData({id: res.data.id, text: res.data.text, isToggle: !res.data.isToggle })
		}
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
							<TextField
								placeholder={'TODO'} 
								style={{ marginTop: 80, margin: 8 }}
								onChangeText={(e) => { this.setState({text: e}) }} 
							/>
							<Button
								title={'Add'}
								theme="primary"
								width={80}
								action={() => this.props.onAddData(this.state.text)}
							/>
							<TodoList todo={this.props.todo} onDeleteItem={(e)=> this.onDeleteItem(e)} onEditItem={(e)=> this.onEditItem(e)}/>
						</View>
						:
						<View>
							<TextField
								value={this.state.value} 
								style={{ marginTop: 80, margin: 8 }}
								onChangeText={(e) => { this.setState({value: e}) }} 
							/>
							<Button
								title={'Save'}
								theme="primary"
								width={80}
								action={() => {
									this.props.onUpdateData({id: this.state.id, text: this.state.value, isToggle: this.state.isToggle })
									this.setState({mode: 'MODE_ADD'})
								}}
							/>
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
