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