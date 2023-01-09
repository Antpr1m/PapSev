import { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../../hooks/hooks"
import styles from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo"



const Profile: FC = () => {

	const { userId } = useParams()
	const { id } = useAppSelector(state => state.auth)
	const navigate = useNavigate()

	// let userId = 24007
	let currentUser: number = Number(userId)


	if (!currentUser) {
		currentUser = id
		if (!currentUser) {
			navigate('/login')
		}
	}

	return (
		<div>
			<ProfileInfo userId={currentUser} />
		</div>
	)
}



export default Profile

