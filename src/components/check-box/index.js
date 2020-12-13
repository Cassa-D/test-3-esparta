import { useState } from "react"

import styled from "styled-components"
import { motion } from "framer-motion"

const CheckBox = ({ hasDone, onCheck }) => {
    const [isChecked, setIsChecked] = useState(hasDone)

    const handleOnClick = () => {
        onCheck(!isChecked)
        setIsChecked(!isChecked)
    }

    return (
        <StyledInputContainer
            onClick={handleOnClick}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
            <input type="checkbox" defaultChecked={isChecked} />
            <span className="checkmark"></span>
        </StyledInputContainer>
    )
}

export default CheckBox

const StyledInputContainer = styled(motion.div)`
    position: relative;
    cursor: pointer;

    input {
        position: absolute;
        cursor: pointer;

        opacity: 0;
        height: 0;
        width: 0;

        :checked ~ .checkmark {
            background-color: #fff;
        }

        :checked ~ .checkmark:after {
            display: block;
        }
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;

        height: 14px;
        width: 14px;

        border-radius: 5px;
        border: solid 2px #2196F3;

        margin: 0 10px;

        :after {
            content: "";
            position: absolute;
            display: none;
        }

        :after {
            left: 2px;
            top: -12px;
            width: 12px;
            height: 22px;

            border: solid black;
            border-width: 0 4px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
    }
`