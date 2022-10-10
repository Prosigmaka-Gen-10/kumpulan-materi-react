export const initialState = {
	nama: 'abid',
	umur: 18
}

export default function orangReducer (state = initialState, action) {
	switch (action.type) {
		case 'ubahNama':
			return { ...state, nama: action.value }
		case 'ubahUmur':
			return { ...state, umur: action.value }
		default:
			return state
	}

	// if (action.type === 'ubahNama') {
	// 	return {
	// 		...state,
	// 		nama: action.value
	// 	}
	// }

	// if (action.type === 'ubahUmur') {
	// 	return {
	// 		...state,
	// 		umur: action.value
	// 	}
	// }

	// return state
}
