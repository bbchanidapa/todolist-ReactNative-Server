import axios from 'axios'

export const addItemAction = (text) => {
	return (dispatch) => {
		return axios.post('http://localhost:3000/todo', {
			id: Date.now(),
			text,
			isToggle: false
		})
				.then(response => {
						return dispatch({type: 'ADD', payload: response.data})
				})
				.catch((error) => {
						console.log(error)
				})
	}
}

export const deleteItemAction = (res) => {
	return (dispatch) => {
		return axios.delete(`http://localhost:3000/todo/${res.id}`)
				.then(response => {
					return dispatch({type: 'DELETE', payload: res})
				})
				.catch((error) => {
						console.log(error)
				})
	}
}

export const updateItemAction = (res) => {
	return (dispatch) => {
		return axios.put(`http://localhost:3000/todo/${res.id}`, {
			text: res.text,
			isToggle: res.isToggle
		})
				.then(response => {
					return dispatch({
						type: 'EDIT', 
						payload: response.data
					})
				})
				.catch((error) => {
						console.log(error)
				})
	}
}

export const fetchDataAction = () => {
	return (dispatch) => {
		axios.get('http://localhost:3000/todo')
				.then(response => {
						dispatch({
								type: 'TODO_FETCH_SUCCESS',
								payload: response.data
						})
				})
				.catch((error) => {
						console.log(error)
				})
	}
}