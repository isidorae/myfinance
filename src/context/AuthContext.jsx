import { createContext, useState} from "react";
import { login, register, logout } from "../hooks/auth";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth ] = useState(false)
    const [userData, setUserData ] = useState("") //username and id
    const [token, setToken] = useState("")

    const navigate = useNavigate()

    const createAccount = async (data) => {
        try {
            const res = await register(data)
            const userData = res.data.detail;
            console.log("*** REGISTER ****")
            console.log(userData)
            console.log(res.data.detail.id)
            setToken(res.data.detail.token)
            setUserData({id: res.data.detail.id, username: res.data.detail.username})
            navigate('/dashboard')
            setIsAuth(true)
        } catch (error) {
                console.log(error)
                console.log(error.response.data.message)
        }
    }

    const loginToApp = async (data) => {
        try {
            const res = await login(data)
            const userData = res.data.detail;
            console.log("*** LOGIN ****")
            console.log(userData)
            console.log(res.data.detail.id)
            setToken(res.data.detail.token)
            setUserData({id: res.data.detail.id, username: res.data.detail.username})
            navigate('/dashboard')
            setIsAuth(true)
        } catch (error) {
                console.log(error)
                console.log(error.response)
        }

    }

    const logoutFromApp = async () => {
        try {
            const res = await logout()
            if (await res) {
                setIsAuth(false)
                setUserData("")
                setToken("")
                return navigate('/')
            }
        } catch (error) {
                console.log(error)
                console.log(error.response.data.message)
        }
    }



    const data = {
        createAccount,
        loginToApp,
        logoutFromApp,
        isAuth,
        userData,
        token
    }
    return (
        <AuthContext.Provider value={data}>
            { children}
        </AuthContext.Provider>
    )
}

export { AuthProvider } 
export default AuthContext;