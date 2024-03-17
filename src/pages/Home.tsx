import { Button } from '../components/Button.tsx'
import { increment } from '../state/slices/counterSlice.ts'
import { useAppDispatch, useAppSelector } from '../state/hook.ts'
import { counterSelector } from '../state/selectors/counterSelector.ts'
import { Checkbox } from '../components/Checkbox/component.tsx'
import { useState } from 'react'
import { Input } from '../components/Input/component.tsx'

export const Home: React.FC = () => {
  const [checked, setChecked] = useState(true)
  const dispatch = useAppDispatch()
  const count = useAppSelector(counterSelector)

  const increaseNumber = () => {
    dispatch(increment({ nomre: 10 }))
  }

  const handleCheck = () => {
    setChecked((prev) => !prev)
  }
  return (
    <>
      <h2>{count}</h2>
      <Button handleClick={increaseNumber} style={{ background: 'red' }} />

      <Checkbox checked={checked} onCheck={handleCheck} />
      <Input label="salam" />
    </>
  )
}
