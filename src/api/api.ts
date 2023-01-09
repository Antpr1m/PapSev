import axios from 'axios'
import { ResultCodeEnum } from '../types/types'

export const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: { "API-KEY": "d443463f-67c1-4459-b735-7d91522d64b4" }
})

export type ResponseType<D = {}> = {
	data: D
	resultCode: ResultCodeEnum
	error: Array<string>
}

export type loginResponseType = {
	userId: number
}
export type authResponseType = {
	id: number, email: string, login: string
}



