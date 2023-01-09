import { FC } from "react"
import styles from './ProfileInfo.module.scss'
import userFoto from '../../../../img/user.png'
import { useGetProfileQuery } from "../../../../api/profileApi"
import { useAppSelector } from "../../../../hooks/hooks"
import { IProfileResponse } from "../../../../types/types"
import ProfileStatus from "./ProfileStatus/ProfileStatus"


type ProfileInfo = {
	userId: number
}

const ProfileInfo: FC<ProfileInfo> = ({ userId }) => {

	const { isAuth, id } = useAppSelector(state => state.auth)
	const { data: profile, isError, isLoading } = useGetProfileQuery(userId)


	return (
		<>
			<div className={styles.profileInfo}>
				<div className={styles.container}>
					<div className={styles.profileCommonImg}>
						<div className={`${styles.profileImg}`}>
							<img src={profile?.photos.large || userFoto} alt="userFoto" className="mb-5 shadow-md rounded-full" />
						</div>
						<div className={styles.profileInputDownload}>
							<input type="file" />
						</div>
					</div>


					<div className={styles.profileAbout}>
						<div className={`${styles.profileStatus} mb-5`}>
							<ProfileStatus userId={userId} />
						</div>
						<div>
							{profile && <ProfileDescription profile={profile} />}
						</div>
					</div>

				</div>
			</div>
		</>
	)
}
export default ProfileInfo


const ProfileDescription = ({ profile }: { profile: IProfileResponse }) => {

	return (
		<>
			<div className="mb-2">
				<b>Full name:</b> {profile?.fullName}
			</div>

			<div className="mb-2">
				<b>Looking for a job:</b> {profile?.lookingForAJob ? 'yes' : 'no'}
			</div>

			{profile?.lookingForAJob &&
				<div className="mb-2">
					<b>My professional skils:</b> {profile?.lookingForAJobDescription}
				</div>}

			<div className="mb-2">
				<b>About me:</b> {profile?.aboutMe}
			</div>

			{/* 			<div>
				<b>Contacts:</b> {Object.keys(profile?.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile?.contacts[key]} />
				})}
			</div>
			{isOwner && <button onClick={changeEditMode}>Edit profile</button>} */}
		</>
	)
}

//Компонента для отображения вложенного объекта

{/* interface ContactProp {
	contactTitle: string
	contactValue: string
}

const Contact: FC<ContactProp> = ({ contactTitle, contactValue }) => {
	return (
		<div>
			<b>{contactTitle}</b>:{contactValue}
		</div>
	)
} */}