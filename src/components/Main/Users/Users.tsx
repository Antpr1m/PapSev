import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { fetchUsers } from "../../../store/actions/usersAction"
import User from "./User"
import ReactPaginate from 'react-paginate';


const PAGE_SIZE = 10

const Users: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const dispatch = useAppDispatch()
	const { users, loading, totalCount, error } = useAppSelector(state => state.users)


	let pageCount = Math.ceil(totalCount / PAGE_SIZE)

	useEffect(() => {
		dispatch(fetchUsers(currentPage, PAGE_SIZE))
	}, [dispatch, currentPage])

	const pageChangeHandler = ({ selected }: { selected: number }) => {
		setCurrentPage(selected)
		console.log(selected);

	}

	return (
		<div className="px-5 pt-5 ">

			<div className="flex justify-center">
				<ReactPaginate
					breakLabel="..."
					nextLabel=">"
					onPageChange={pageChangeHandler}
					pageRangeDisplayed={5}
					marginPagesDisplayed={1}
					pageCount={pageCount}
					previousLabel="<"
					containerClassName="flex"
					activeClassName="bg-gray-500 shadow-md rounded text-white"
					pageClassName="px-2 py-2 border mr-1"
					previousClassName="px-2 py-2 border mr-1"
					nextClassName="px-2 py-2 border"
				/>
			</div>

			<div className="text-center h-5 mb-2 text-gray-500 text-xl">
				{loading && <div>Loading...</div>}
			</div>
			<div className="text-center h-5 text-gray-500 text-xl">
				{loading && <div>{error}</div>}
			</div>

			{users.map(user => <User key={user.id} user={user} />)}

		</div>
	)
}
export default Users