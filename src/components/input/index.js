import { useState } from "react"

import styled from "styled-components"

const Input = ({ hasDone, text, onChange }) => {
    const [value, setValue] = useState(text)

    const handleOnChange = ({ target: { value } }) => {
        setValue(value)
        onChange(value)
    }

    return (
        <StyledInput
            type="text"
            hasDone={hasDone}
            value={value}
            disabled={hasDone}
            onChange={handleOnChange}
            placeholder="Coloque seu novo TODO"
        />
    )
}

export default Input

const StyledInput = styled.input`
    text-decoration-line: ${props => props.hasDone ? "line-through" : "none"};

    border: none;
    outline: none;

    background-color: #F6F6F6;

    :disabled {
        color: black;
    }
`