import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUsers } from "../../types/types";


const initialState = {
	users: [] as Array<IUser>,
	loading: false,
	error: '' as string,
	totalCount: 0 as number,
}

type InitialState = typeof initialState
interface UsersPayload {
	users: Array<IUser>
	totalCount: number
}

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetching(state) {
			state.loading = true
		},
		fetchingUsersSuccess(state, action: PayloadAction<UsersPayload>) {
			state.loading = false
			state.users = action.payload.users
			state.totalCount = action.payload.totalCount
			state.error = ''
		},
		fetchError(state, action: PayloadAction<Error>) {
			state.loading = false
			state.error = action.payload.message
		}
	}
})

export default usersSlice.reducer



