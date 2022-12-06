import { authResponseType, instance, loginResponseType, ResponseType } from '../../api/api'
import { ResultCodeEnum } from '../../types/types'
import { authSlice } from '../slices/authSlice'
import { TypedDispatch } from "../store"




export const getAuthUserData = () => {
	return async (dispath: TypedDispatch) => {
		try {
			dispath(authSlice.actions.authWaiting)
			const response = await instance.get<ResponseType<authResponseType>>('auth/me')
			if (response.data.resultCode === ResultCodeEnum.Success) {
				const { id, email, login } = response.data.data
				dispath(authSlice.actions.setAuthUserData({ id, email, login, isAuth: true }))
			}
		} catch (error) {

		}
	}
}


export const login = (email: string, password: string, rememberMe: boolean) => {
	return async (dispatch: TypedDispatch) => {
		try {
			const response = await instance.post<ResponseType<loginResponseType>>('auth/login', { email, password, rememberMe })
			if (response.data.resultCode === ResultCodeEnum.Success) {
				dispatch(getAuthUserData())
			}
			if (response.data.resultCode === ResultCodeEnum.Captcha) {
				// dispatch(getCaptchaUrl())
			}
		} catch (error) {
			dispatch(authSlice.actions.fetchError(error as Error))
		}

	}
}

export const logout = () => {
	return async (dispatch: TypedDispatch) => {
		try {
			const response = await instance.delete('auth/login')
			if (response.data.resultCode === ResultCodeEnum.Success) {
				dispatch(authSlice.actions.setAuthUserData({ id: null, email: null, login: null, isAuth: false }))
			}
		} catch (error) {

		}
	}
}

