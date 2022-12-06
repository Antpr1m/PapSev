import { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks/hooks"
import styles from './Main.module.scss'
import userFoto from '../../img/user.png'
import { useGetProfileQuery, useLazyGetProfileQuery } from "../../api/profileApi"
import { IProfileResponse } from "../../types/types"



const Profile: FC = () => {

	let userId = 24007

	const navigate = useNavigate()
	const { isAuth, id } = useAppSelector(state => state.auth)
	const { data, isError, isLoading } = useGetProfileQuery(userId)


	/* 	useEffect(() => {
			if (userId) {
				fetchProfile(userId)
			}
		}, []) */


	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={`${styles.profileImg}`}>
					<img src={userFoto} alt="userFoto" />
				</div>
				<div className={styles.profileAbout}>
					<div className={styles.profileStatus}>
					</div>
					<div>
						{data && <ProfileDescription data={data} />}
					</div>
				</div>
				<div className={styles.profileInputDownload}>
					<input type="file" />
				</div>
			</div>
		</div>
	)
}

const ProfileDescription = ({ data }: { data: IProfileResponse }) => {

	return (
		<>
			<div>
				<b>Full name:</b> {data?.fullName}
			</div>


			<div>
				<b>Looking for a job:</b> {data?.lookingForAJob ? 'yes' : 'no'}
			</div>

			{data?.lookingForAJob &&
				<div>
					<b>My professional skils:</b> {data?.lookingForAJobDescription}
				</div>}
			<div>
				<b>About me:</b> {data?.aboutMe}
			</div>
			{/* <div>
				<b>Contacts:</b> {Object.keys(data?.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={data?.contacts[key]} />
				})}
			</div>
			{isOwner && <button onClick={changeEditMode}>Edit profile</button>} */}
		</>
	)
}

//Компонента для отображения вложенного объекта
/* const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div>
			<b>{contactTitle}</b>:{contactValue}
		</div>
	)
} */

export default Profile

