import { useQuery } from "@tanstack/react-query"
import {Link} from "react-router-dom"

type GetRoomsApiResponse  = Array<{
	id: string
	name: string
	code: string
}>	

export const CreateRoom = () => {
	const {data, isLoading} = useQuery({
		queryKey: ["room"],
		queryFn: async () => {
         const response = await fetch("http://localhost:7777/rooms")
		 const result: GetRoomsApiResponse = await response.json()
		 return result
		}
	})



	return (
		<div>
			<h1>Create Room</h1>
			{
				isLoading && <p>Carregando...</p>
			}
			{
				data?.map((room) => (
					<div className="flex flex-col gap-1">
						<Link to={`/room/${room.id}`} key={room.id}>{room.name}</Link>
					</div>
				))
			}
			<Link className="underline" to="/room">Acessar Sala</Link>
		</div>
	)
}