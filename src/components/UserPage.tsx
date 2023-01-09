import { useParams } from "react-router-dom"


const UserPage = () => {

	const { userId } = useParams()

	return (
		<div>
			{userId}
		</div>
	)
}
export { UserPage } 