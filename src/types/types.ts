
// Users ====================================================
export interface IUsers {
	items: Array<IUser>
	totalCount: ResultCodeEnum
	error: string
}

export interface IUser {
	id: number
	name: string
	status: string
	photos: IPhotos
	followed: boolean
}


// Result Code ================================================
export enum ResultCodeEnum {
	Success = 0,
	Error = 1,
	Captcha = 10
}

// Login Form ================================================
export interface ILoginFormData {
	email: string
	password: string
	rememberMe: boolean
}

// Profile ================================================
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
	website: string;
	vk: string;
	twitter: string;
	instagram: string;
	youtube: string;
	github: string;
	mainLink: string;
}

export interface IPhotos {
	small: string;
	large: string;
}

// Status ================================================
export interface ResponseStatus {
	data: {}
	resultCode: ResultCodeEnum
	messages: Array<string>
}




