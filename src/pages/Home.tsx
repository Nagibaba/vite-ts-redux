import { Button } from '../components/Button.tsx'
import { increment } from '../state/slices/counterSlice.ts'
import { useAppDispatch, useAppSelector } from '../state/hook.ts'
import { counterSelector } from '../state/selectors/counterSelector.ts'

export const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSelector)

  const increaseNumber = () => {
    dispatch(increment({ nomre: 10 }))
  }
  return (
    <>
      <h2>{count}</h2>
      <Button handleClick={increaseNumber} style={{ background: 'red' }} />
    </>
  )
}
