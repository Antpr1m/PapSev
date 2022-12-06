import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	id: null as number | null,
	email: null as string | null,
	login: null as string | null,
	isAuth: false as boolean,
	captcha: null as string | null,
	authLoading: false as boolean,
	error: null as string | null
}

type InitialState = typeof initialState
interface AuthDataPayload {
	id: number | null
	email: string | null
	login: string | null
	isAuth: boolean
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authWaiting(state) {
			state.authLoading = true
		},
		setAuthUserData(state, action: PayloadAction<AuthDataPayload>) {
			state.authLoading = false
			state.id = action.payload.id
			state.email = action.payload.email
			state.login = action.payload.login
			state.isAuth = action.payload.isAuth
			state.error = ''
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.authLoading = false
			state.error = action.payload.message
		}
	}
})

export default authSlice.reducer