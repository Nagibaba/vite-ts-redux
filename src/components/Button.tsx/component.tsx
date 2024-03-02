import React from "react"
import { ButtonProps } from "./types"


export const Button: React.FC<ButtonProps> = (props) => {

    const {handleClick, ...restProps} = props

    return <button onClick={handleClick} {...restProps}>Salam</button>
}