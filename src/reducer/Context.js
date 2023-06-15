import React, { useContext } from 'react'
import { createContext } from "react";
import { useGetBible } from '../customHooks/useGetBible';


const Bible = createContext();

const Context = ({children}) => {
	const {data, isBibleLoading, refetchData } = useGetBible();

	return <Bible.Provider value={{ data, isBibleLoading, refetchData}}>{children}</Bible.Provider>
	
}

export default Context;

export const BibleState = () => {
	return useContext(Bible)
}