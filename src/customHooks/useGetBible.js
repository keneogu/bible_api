import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetBible = () => {
	const {data, refetch, isLoading: isBibleLoading} = useQuery(["bible"], async () => {
		return axios.get(`https://bible-api.com/romans 12:1-2,5-7,9,13:1-9&10`).then(res => res.data)
	});

	const refetchData = () => {
		alert("Data Refetched");
		refetch();
	};

	return { data, refetchData, isBibleLoading}
}