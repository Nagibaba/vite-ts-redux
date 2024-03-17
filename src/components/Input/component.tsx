import * as S from './styled'

type InputProps = {
  isHorizontal?: boolean
  label: string
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    isHorizontal = false,
    label,
    labelProps = {},
    inputProps = {},
  } = props
  return (
    <S.Wrapper isHorizontal={isHorizontal}>
      <S.Label {...labelProps}>{label}</S.Label>
      <S.Input {...inputProps} />
    </S.Wrapper>
  )
}
