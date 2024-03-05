import { ComponentProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'

interface TextProps extends ComponentProps<'p'> {
  variant?: 'header1' | 'paragraph'
  isPrimary?: boolean
  isSecondary?: boolean
  isOutline?: boolean
}

export const Text: React.FC<TextProps> = (props) => {
  const {
    variant = 'paragraph',
    isPrimary = false,
    isSecondary = false,
    isOutline = false,
    ...restProps
  } = props
  const variants = {
    header1: {
      fontSize: 35,
      fontWeight: 600,
    },
    paragraph: {
      fontSize: 14,
      fontWeight: 500,
    },
  }

  return (
    <p
      style={variants[variant]}
      className={classNames({
        [styles.primary]: isPrimary,
        [styles.secondary]: isSecondary,
        [styles.outline]: isOutline,
      })}
      {...restProps}
    />
  )
}
