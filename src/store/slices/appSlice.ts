import { createSlice } from "@reduxjs/toolkit"
import { getAuthUserData } from "../actions/authActions"
import { TypedDispatch } from "../store"


type InitialState = {
	initialized: boolean
}

const initialState: InitialState = {
	initialized: false
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		initializingSuccess: (state) => {
			state.initialized = true
		}
	}
})

export default appSlice.reducer


//Thunk
/* export const initializeApp = () => (dispatch: TypedDispatch) => {
	let promise = dispatch(getAuthUserData())
	Promise.all([promise])
		.then(() => {
			dispatch(appSlice.actions.initializingSuccess())
		})
} */

export const initializeApp = () => {
	return async (dispatch: TypedDispatch) => {
		await dispatch(getAuthUserData())

		dispatch(appSlice.actions.initializingSuccess())
	}
}