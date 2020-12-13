import { CREATENEWTODO, DELETETODO, CHECKTODO, MODIFYTODO } from "./types"

export const createNewTodo = () => ({
    type: CREATENEWTODO
})

export const deleteTodo = (todoId) => ({
    type: DELETETODO,
    payload: {
        todoId
    }
})

export const modifyTodo = (todoId, text) => ({
    type: MODIFYTODO,
    payload: {
        todoId,
        text
    }
})

export const checkTodo = (todoId, checked) => ({
    type: CHECKTODO,
    payload: {
        todoId,
        checked
    }
})