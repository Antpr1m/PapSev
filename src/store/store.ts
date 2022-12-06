import usersReducer from './slices/usersSlice';
import authReducer from './slices/authSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { profileApi } from "../api/profileApi";
import appReducer from './slices/appSlice'



export const rootReducer = combineReducers({
	users: usersReducer,						// Default export from userSlice
	auth: authReducer,
	app: appReducer,
	[profileApi.reducerPath]: profileApi.reducer
})

export function setupStore() {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type TypedStore = ReturnType<typeof setupStore>
export type TypedDispatch = TypedStore['dispatch']