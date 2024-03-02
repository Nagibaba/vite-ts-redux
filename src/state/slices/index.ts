import { combineReducers } from 'redux'
import counterSlice from './counterSlice'
import postsSlice from './postsSlice'
import todosSlice from './todosSlice'

export default combineReducers({
  counter: counterSlice,
  posts: postsSlice,
  todos: todosSlice,
})
