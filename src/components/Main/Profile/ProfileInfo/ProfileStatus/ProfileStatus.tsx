import { ChangeEvent, FC, useEffect, useState } from "react"
import { useGetStatusQuery, useUpdateStatusMutation, } from "../../../../../api/profileApi"

type ProfileStatus = {
	userId: number
}

const ProfileStatus: FC<ProfileStatus> = ({ userId }) => {

	const { data: fetchStatus } = useGetStatusQuery(userId)
	const [updateStatus, { isError }] = useUpdateStatusMutation()
	//state
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(fetchStatus)


	useEffect(() => {
		setStatus(fetchStatus)
	}, [fetchStatus])

	const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.currentTarget.value)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		if (status) {
			updateStatus(status).unwrap()
		}
	}

	return (
		<>
			{!editMode &&
				<div className="flex justify-center items-center">
					<b>Status:</b> <span onClick={() => { setEditMode(true) }}>{status || "Please, write your status"}</span>
				</div>
			}
			{editMode &&
				<div className="flex justify-center items-center">
					<b>Status:</b> <input onChange={onStatusChange}
						onBlur={deactivateEditMode}
						autoFocus={true}
						value={status}
						className="border border-solid" />
				</div>
			}
		</>
	)
}
export default ProfileStatus