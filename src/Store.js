import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/IndexReducer'
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ReduxThunk]
middleware.push(createLogger())

const store = createStore(
  reducer,
  {},
  applyMiddleware(...middleware)
)

export default store