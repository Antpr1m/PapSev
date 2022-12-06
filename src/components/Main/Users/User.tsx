import { FC } from "react"
import { IUser } from "../../../types/types"
import userPhoto from '../../../img/user.png'

interface UserProps {
	user: IUser
}


const User: FC<UserProps> = ({ user }) => {
	return (
		<div className="py-3 mt-2">
			<div className="mb-3">
				{user.name}
				{user.status}
			</div>
			<div>
				<img className="w-[100px] shadow-md" src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
			</div>
		</div>
	)
}
export default User