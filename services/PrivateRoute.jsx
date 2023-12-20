import { useContext } from "react"
import { AuthContext } from "../src/context/AuthContext"
import { Navigate } from "react-router-dom"


const PrivateRoute = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext)


    return isAuthenticated ? element : <Navigate to="/login"/>
}

export default PrivateRoute