import { FC } from "react"
import { Link } from "react-router-dom"
import style from './Navbar.module.scss'

const Navbar: FC = () => {
	return (
		<div className={style.navbar}>
			<div className={style.container}>
				<ul className={style.list}>
					<li className={style.item}>
						<Link className={style.link} to={'/profile'}>Main</Link>
					</li>
					<li className={style.item}>
						<Link className={style.link} to={'/users'}>Users</Link>
					</li>
					<li className={style.item}>
						<Link className={style.link} to={'/conditioner'}>Conditioner</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
export default Navbar