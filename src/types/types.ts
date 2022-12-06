

export interface IUser {
	id: number
	name: string
	status: string
	photos: IPhotos
	followed: boolean
}

export interface IUsers {
	items: Array<IUser>
	totalCount: ResultCodeEnum
	error: string
}

export interface IPhotos {
	small: string
	large: string
}

export enum ResultCodeEnum {
	Success = 0,
	Error = 1,
	Captcha = 10
}

export interface ILoginFormData {
	email: string
	password: string
	rememberMe: boolean
}


export interface IProfileResponse {
	aboutMe: string;
	contacts: IContacts;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: IPhotos;
}

export interface IContacts {
	facebook: string;
	website?: any;
	vk?: any;
	twitter?: any;
	instagram?: any;
	youtube?: any;
	github?: any;
	mainLink?: any;
}

export interface IPhotos {
	small: string;
	large: string;
}




