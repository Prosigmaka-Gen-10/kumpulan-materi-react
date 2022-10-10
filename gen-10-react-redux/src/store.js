import { combineReducers, createStore } from "redux"

export const initialState = {
	nama: 'abid',
	umur: 18
}

export function orangReducer (state = initialState, action) {
	if (action.type === 'ubahNama') {
		return {
			...state,
			nama: action.value
		}
	}

	if (action.type === 'ubahUmur') {
		return {
			...state,
			umur: action.value
		}
	}

	return state
}

const rootReducer = combineReducers({
	orang: orangReducer
})

const store = createStore(rootReducer)

export default store
