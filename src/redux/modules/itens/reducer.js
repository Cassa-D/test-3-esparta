import { CHECKTODO, MODIFYTODO, DELETETODO, CREATENEWTODO } from "./types"

const defaultState = JSON.parse(localStorage.getItem("TODOs")) || []

const writeInLocalStorage = (newState) =>
    localStorage.setItem('TODOs', JSON.stringify(newState))

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATENEWTODO:
            let newState = [...state, { text: "", checked: false, id: state.length }]

            writeInLocalStorage(newState)
            return newState
        case CHECKTODO:
            const { todoId, checked } = action.payload

            let newState2 = [...state]
            newState2.find((todo) => todo.id === todoId).checked = checked

            writeInLocalStorage(newState2)
            return newState2
        case MODIFYTODO:
            const { todoId: todoIndex, text } = action.payload

            let newStateModify = [...state]
            newStateModify.find((todo) => todo.id === todoIndex).text = text

            writeInLocalStorage(newStateModify)
            return newStateModify
        case DELETETODO:
            const { todoId: indexTodo } = action.payload

            let newState3 = state.filter((todo) => todo.id !== indexTodo)

            writeInLocalStorage(newState3)
            return newState3
        default:
            return state
    }
}

export default reducer