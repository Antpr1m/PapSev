import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { logout } from "../../store/actions/authActions"
import Burger from "./Burger/Burger"
import style from './Header.module.scss'
import logo from './img/facebook.png'

const Header: FC = () => {

	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { isAuth, login } = useAppSelector(state => state.auth)

	const logOut = () => {
		dispatch(logout())
	}

	return (
		<>
			<div className={style.header}>

				<div className={style.headerLeft}>
					<div className={style.headerLogo}>
						<img className={`${style.logo} w-12 shadow-sm border rounded-full`} src={logo} alt="logo" />
					</div>

					<div>
						<form >
							<input className={style.headerSearch} type="text" />
						</form>
					</div>

				</div>

				<div className={style.headerCenter}>
					<h1 className={style.headerLabel}>Social Network</h1>

					<Burger />
				</div>

				<div className={style.headerLeft}>
					<div className={style.headerAuth}>
						<ul className={style.authList}>
							<li>
								{!isAuth ? <button onClick={() => { navigate('/login') }}>LogIn</button> : <div>{login}</div>}
							</li>
							<li>
								<button onClick={logOut}>LogOut</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
export default Header