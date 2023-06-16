import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useReducer } from "react";
import { filterReducer } from "../reducer/Reducer";

export const useGetBible = () => {
	const [filterState, filterDispatch] = useReducer(filterReducer, {
		category: "web",
		searchQuery: "John 3:16"
	});

	const {data, refetch, isLoading: isBibleLoading} = useQuery(["bible"], async () => {
		return axios.get(`https://bible-api.com/${filterState.searchQuery}?translation=${filterState.category}`).then(res => res.data)
	});

	const refetchData = () => {
		alert("Data Refetched");
		refetch();
	};

	return { data, refetchData, isBibleLoading, filterState, filterDispatch}
}