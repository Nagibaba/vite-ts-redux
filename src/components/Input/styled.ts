import styled from 'styled-components'

const Wrapper = styled.div<{ isHorizontal?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isHorizontal ? 'row' : 'column')};
`

const Input = styled.input`
  border: 1px solid var(--main-color);
  height: 40px;
  width: 300px;
  max-width: 100%;
  font-size: 16px;
  border-radius: 4px;
  &:focus {
    outline: none;
    box-shadow: 10px 5px 10px rgba(255, 255, 255, 0.1);
  }
`

const Label = styled.label`
  color: blue;
`

export { Wrapper, Input, Label }
