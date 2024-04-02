import Cookies from "js-cookie"
import { FC } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { isTokenExpired } from "src/lib/utils"

const ProtectedRoute:FC<TCProps> = ({children}) => {
    const token = Cookies.get("currentUser")
    console.log("Token ===> ", token)
    const isTokenInvalid = token ? isTokenExpired(token) : true
    const location = useLocation()

    console.log("is it invalid ===> ", isTokenInvalid)
    if(isTokenInvalid) return <Navigate to={"/auth/sign-in"} state={{path: location.pathname}} />

    return children
}

export default ProtectedRoute
