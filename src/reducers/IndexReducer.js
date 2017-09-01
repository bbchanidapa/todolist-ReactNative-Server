import { combineReducers } from 'redux'

const todo = (state = [], action) => {
  switch (action.type) {
    case 'TODO_FETCH_SUCCESS':
      return action.payload
    case 'ADD':
      return [...state, action.payload]
    case 'EDIT':
      return [...state, action.payload]
    case 'DELETE':
    const request =  state.filter( thisState =>{
      return thisState.id !== action.payload.id
    })
    console.log(request)
      return [...request]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer
