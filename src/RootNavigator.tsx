import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { useSelector } from 'react-redux'
import { tokenSelector } from './common/state/selectors/authSelector'
import { Posts } from './pages/Posts'
import { Todo } from './pages/Todo'

const RootNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootNavigator
