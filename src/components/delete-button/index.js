import TrashClose from "./trash.svg"
import TrashOpen from "./trash-open.svg"

import styled from "styled-components"
import { motion } from "framer-motion"

const DeleteButton = ({ onClick }) => {
    return (
        <StyledImg
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            onClick={onClick}
        />
    )
}

export default DeleteButton

const StyledImg = styled(motion.div)`
    height: 18px;

    background-image: url(${_ => true && TrashClose});

    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px 20px;

    cursor: pointer;

    :hover {
        background-image: url(${_ => true && TrashOpen});
    }
`