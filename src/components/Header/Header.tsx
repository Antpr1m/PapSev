import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { logout } from "../../store/actions/authActions"
import Burger from "./Burger/Burger"
import style from './Header.module.scss'

const Header: FC = () => {

	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { isAuth, login } = useAppSelector(state => state.auth)

	const logOut = () => {
		dispatch(logout())
	}

	return (
		<div className={style.header}>
			<Burger />
			<h1 className={style.headerLabel}>Social Network</h1>
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
	)
}
export default Header