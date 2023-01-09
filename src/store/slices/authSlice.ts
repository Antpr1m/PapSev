import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';



const ID_KEY = "social-id"
const EMAIL_KEY = "social-email"
const LOGIN_KEY = "social-login"

const logined: boolean = Boolean(localStorage.getItem(ID_KEY) && localStorage.getItem(EMAIL_KEY) && localStorage.getItem(LOGIN_KEY))


const initialState = {
	id: Number(localStorage.getItem(ID_KEY)) ?? 0,
	email: localStorage.getItem(EMAIL_KEY) ?? "" as string,
	login: localStorage.getItem(LOGIN_KEY) ?? "" as string,
	isAuth: logined as boolean,
	captcha: "" as string,
	authLoading: false as boolean,
	error: "" as string
}

type InitialState = typeof initialState
interface AuthDataPayload {
	id: number
	email: string
	login: string
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

			localStorage.setItem(ID_KEY, String(action.payload.id))
			localStorage.setItem(EMAIL_KEY, action.payload.email)
			localStorage.setItem(LOGIN_KEY, action.payload.login)
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.authLoading = false
			state.error = action.payload.message
		}
	}
})

export default authSlice.reducer