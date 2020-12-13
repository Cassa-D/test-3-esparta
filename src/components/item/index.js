import CheckBox from "../check-box"
import DeleteButton from "../delete-button"
import Input from "../input"

import { ItemContainer } from "../styled"

const Item = ({ hasDone = false, text, onCheck, onTrashOpen, onChangeInput }) => {
    return (
        <ItemContainer className="container">
            <CheckBox hasDone={hasDone} onCheck={onCheck} />
            <Input hasDone={hasDone} text={text} onChange={onChangeInput} />
            <DeleteButton onClick={onTrashOpen} />
        </ItemContainer>
    )
}

export default Item