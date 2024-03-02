import './App.css'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Todo } from './pages/Todo.tsx'

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default App
