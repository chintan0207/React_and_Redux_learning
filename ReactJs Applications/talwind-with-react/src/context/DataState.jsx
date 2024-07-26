/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import DataContext from "./DataContext"
import { useNavigate } from "react-router-dom";

const DataState = ({ children }) => {

    const [userData, setUserData] = useState({});

    const URL = "http://localhost:5050/api"
    const postLogin = async ({ email, password }) => {
        try {
            const response = await fetch(`${URL}/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            })

            const result = await response.json()
            return result;
        } catch (error) {
            console.error(error)
        }

    }

    const postSignUp = async ({ firstName, lastName, email, password }) => {
        try {
            const response = await fetch(`${URL}/signup`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: `${firstName} ${lastName}`, email, password })
            })

            const result = await response.json()
            return result;
        } catch (error) {
            console.error(error)
        }

    }


    const getUserByToken = async () => {
        try {
            const response = await fetch(`${URL}/getuser`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('auth-token')
                },
            })
            const res = await response.json()
            setUserData(res)
        } catch (error) {
            console.error(error)
        }
    }


    return <DataContext.Provider value={{ postLogin, getUserByToken, userData, postSignUp }}>
        {children}
    </DataContext.Provider>
}

export default DataState