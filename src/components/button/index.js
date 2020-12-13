import styled from "styled-components"
import { motion } from "framer-motion"

const Button = ({ text, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
}

export const ButtonYes = ({ text, onClick }) => {
    return (
        <motion.div
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <StyledButtonYes onClick={onClick}>{text}</StyledButtonYes>
        </motion.div>
    )
}

export const ButtonNo = ({ text, onClick }) => {
    return (
        <motion.div
            style={{ display: "inline-block" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <StyledButtonNo onClick={onClick}>{text}</StyledButtonNo>
        </motion.div>
    )
}

export default Button

const StyledButton = styled.button`
    border-radius: 0 0 5px 5px;
    background-color: #FFD8D8;

    border: none;
    outline: none;

    font: 400 13px Arial;
    padding: 4px;

    cursor: pointer;
`

const StyledButtonYes = styled(StyledButton)`
    border-radius: 5px;
    background-color: #FF6767;
    border: solid 1px red;

    padding: 5px 7px;
    margin: 10px;
`

const StyledButtonNo = styled(StyledButton)`
    border-radius: 5px;
    background-color: #85FF67;
    border: solid 1px #18A800;

    padding: 5px 7px;
    margin: 10px;
`