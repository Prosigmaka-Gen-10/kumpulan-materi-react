import { createSlice } from "@reduxjs/toolkit"

const orangSlice = createSlice({
	name: 'orang',
	initialState: {
		nama: 'abid',
		umur: 18
	},
	reducers: {
		ubahNama (state, action) {
			state.nama = action.payload
		},
		ubahUmur (state, action) {
			state.umur = action.payload
		}
	}
})

// export const ubahNama = orangSlice.actions.ubahNama
// export const ubahUmur = orangSlice.actions.ubahUmur
export const { ubahNama, ubahUmur } = orangSlice.actions

export default orangSlice.reducer