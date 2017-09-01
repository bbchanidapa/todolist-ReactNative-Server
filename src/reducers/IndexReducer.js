import { combineReducers } from 'redux'

const todo = (state = [], action) => {
  switch (action.type) {
    case 'TODO_FETCH_SUCCESS':
      return action.payload
    case 'ADD':
      return [...state, action.payload]
    case 'EDIT':
      state.map((data, index)=>{
        if(data.id == action.payload.id) {
          state[index] = {...state[index], text: action.payload.text}
        }
      })
      return [...state]
    case 'DELETE':
      const request = state.filter( thisState =>{
        return thisState.id !== action.payload.id
      })
      return [...request]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer
