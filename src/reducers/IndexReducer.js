import { combineReducers } from 'redux'

const todo = (state = [], action) => {
  switch (action.type) {
    case 'TODO_FETCH_SUCCESS':
      return [...state, action.payload]
    case 'ADD':
      return [...state, action.payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer
