/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useEffect } from "react"
import DataContext from "../context/DataContext";

const User = () => {
    const context = useContext(DataContext);
    const { getUserByToken, userData } = context
    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            getUserByToken()
        }
    }, []);
    return (
        <div className="h-[60px] p-2 rounded-md w-[180px] shadow-md overflow-hidden bg-white">
            <p className="text-sm font-medium">Name: {userData.name}</p>
            <p className="text-sm font-medium">Email: {userData.email}</p>
        </div>
    )
}

export default User