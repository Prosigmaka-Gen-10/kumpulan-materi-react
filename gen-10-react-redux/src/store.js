import { combineReducers, createStore } from "redux"

import orangReducer from "./reducerOrang"

const rootReducer = combineReducers({
	orang: orangReducer
})

const store = createStore(rootReducer)

export default store