import { usersApi } from "./../../api/usersApi";
import { usersSlice } from "../slices/usersSlice"
import { TypedDispatch } from "../store"




export const fetchUsers = (currentPage: number, pageSize: number) => {
	return async (dispatch: TypedDispatch) => {
		try {
			dispatch(usersSlice.actions.fetching())
			const response = await usersApi.fetchingUsers(currentPage, pageSize)
			dispatch(usersSlice.actions.fetchingUsersSuccess({
				users: response.data.items,
				totalCount: response.data.totalCount
			}))

		} catch (error) {
			dispatch(usersSlice.actions.fetchError(error as Error))
		}
	}
} 