import { IUsers } from '../types/types';
import { instance } from './api';



export const usersApi = {
	fetchingUsers: (currentPage = 1, pageSize = 10) => {
		return instance.get<IUsers>(`users?page=${currentPage}&count=${pageSize}`);
	}
};
