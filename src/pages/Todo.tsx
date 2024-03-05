import { useEffect } from 'react'
import { getTodos } from '../state/slices/todosSlice'
import { useAppDispatch, useAppSelector } from '../state/hook'
import { Text } from '../components/Text'

export const Todo: React.FC = () => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos.data)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])
  return (
    <div>
      <Text variant="paragraph" isSecondary>
        Salam
      </Text>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
