import { createStore, combineReducers } from 'redux'

import items from "./modules/itens/reducer"

const reducers = combineReducers({ items })

const store = createStore(reducers)

export default store