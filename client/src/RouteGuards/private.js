import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { UserContext } from "../Contexts/UserContext"

export const PrivateGuard = () => {
const {user} = useContext(UserContext)
const isAuthenticated = Object.keys(user).length !== 0

if (!isAuthenticated) {

    window.alert("You need to log in first!")
    return <Navigate to={"/user/login"} replace/>
}
    return <Outlet />
}