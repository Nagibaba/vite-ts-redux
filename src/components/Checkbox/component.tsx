import { ChangeEvent } from 'react'
import styles from './styles.module.css'

export type CheckboxProps = {
  checked: boolean
  onCheck: (e: ChangeEvent) => void
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked = false, onCheck } = props
  return (
    <div className={styles.checkWrap}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onCheck}
      />
      <span className={styles.marker}></span>
    </div>
  )
}
