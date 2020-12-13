import { CHECKTODO, MODIFYTODO, DELETETODO, CREATENEWTODO } from "./types"

const defaultState = []

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATENEWTODO:
            return [...state, { text: "", checked: false, id: state.length }]
        case CHECKTODO:
            const { todoId, checked } = action.payload

            let newState = [...state]
            newState.find((todo) => todo.id === todoId).checked = checked

            return newState
        case MODIFYTODO:
            const { todoId: todoIndex, text } = action.payload

            let newStateModify = [...state]
            newStateModify.find((todo) => todo.id === todoIndex).text = text

            return newStateModify
        case DELETETODO:
            const { todoId: indexTodo } = action.payload

            return state.filter((todo) => todo.id !== indexTodo)
        default:
            return state
    }
}

export default reducer