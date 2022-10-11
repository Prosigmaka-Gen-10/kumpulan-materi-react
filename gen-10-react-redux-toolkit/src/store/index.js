import { configureStore } from "@reduxjs/toolkit"

import orangReducer from "./orangSlice"

const store = configureStore({
	reducer: {
		orang: orangReducer
	}
})

export default store