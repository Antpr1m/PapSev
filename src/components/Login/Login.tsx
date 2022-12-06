import { FC } from "react"
import style from './Login.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ILoginFormData } from "../../types/types"
import loginBG from '../../img/login.jpg'
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { login } from "../../store/actions/authActions"
import { useNavigate } from "react-router-dom"



const Login: FC = () => {

	const { isAuth } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	if (isAuth) {
		navigate('/profile')
	}

	return (
		<div className={style.login}>
			<div className={style.container}>
				<div className={style.about}>
					<h2 className={style.subtitle}>WELCOME TO</h2>
					<h2 className={style.aboutTitle}>SEVA Social Network</h2>
					<p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti eius ab totam esse molestias aliquid voluptas nostrum laboriosam! Placeat sint earum deleniti assumenda et maiores quidem corrupti dolore eos hic!</p>
				</div>
				<div className={style.formBody}>
					<div className={style.loginForm}>
						<h3 className={style.loginFormTitle}>Account Login</h3>
						<Form />
					</div>
				</div>
			</div>
			<div className={`${style.bgImage} ${style._ibg}`}>
				<img src={loginBG} alt="bg" />
			</div>
		</div>
	)
}

export default Login


const Form = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>()
	const dispatch = useAppDispatch()

	const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
		const { email, password, rememberMe } = data
		dispatch(login(email, password, rememberMe))
	}

	return (
		<>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				{errors.email && <div className={style.errors}>{errors.email.message}</div>}
				<input {...register('email', { required: 'Email is required field' })} type="email" placeholder="Email" />

				<input {...register('password', { required: 'Password is required field' })} type="pass" placeholder="Password" />
				<div className={style.checbox}>
					<input {...register('rememberMe')} type="checkbox" />
					<label>Remember Me</label>
				</div>
				<button className={style.formButton}>Login to your Account</button>
			</form>
		</>
	)
}
