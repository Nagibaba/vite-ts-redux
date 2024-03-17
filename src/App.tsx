import './App.css'
import { Provider } from 'react-redux'
import { store } from './state/store'
import { Todo } from './pages/Todo.tsx'
import RootNavigator from './RootNavigator.tsx'

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
