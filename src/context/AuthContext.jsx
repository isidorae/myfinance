import { createContext, useState, useEffect} from "react";
import { login, register, logout } from "../hooks/auth";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth ] = useState(false)
    const [userData, setUserData ] = useState("") //username and id
    const [token, setToken] = useState("")

    const [err, setErr] = useState([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        resetErrMsg()
    }, [err])

    const resetErrMsg = () => {
        let timer;
        if (err.length > 0) {
            timer = setTimeout(() => {
                setErr([])
            }, 5000)
        }
        return () => clearTimeout(timer)
    }

    const createAccount = async (data) => {
        try {
            setLoading(true)
            const res = await register(data)
            setLoading(false)
            const userData = res.data.detail;
            console.log("*** REGISTER ****")
            console.log(userData)
            console.log(res.data.detail.id)
            setToken(res.data.detail.token)
            setUserData({id: res.data.detail.id, username: res.data.detail.username})
            navigate('/dashboard')
            setIsAuth(true)
        } catch (error) {
                setLoading(false)
                console.log(error)
                const registerErr = error.response.data.message;
                setErr([...err, registerErr])
        }
    }

    const loginToApp = async (data) => {
        try {
            setLoading(true)
            const res = await login(data)
            setLoading(false)
            const userData = res.data.detail;
            console.log("*** LOGIN ****")
            console.log(userData)
            console.log(res.data.detail.id)
            setToken(res.data.detail.token)
            setUserData({id: res.data.detail.id, username: res.data.detail.username})
            navigate('/dashboard')
            setIsAuth(true)
        } catch (error) {
                setLoading(false)
                console.log(error)
                const loginErr = error.response.data.message;
                setErr([...err, loginErr])
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
        token, 
        err, setErr,
        loading
    }
    return (
        <AuthContext.Provider value={data}>
            { children}
        </AuthContext.Provider>
    )
}

export { AuthProvider } 
export default AuthContext;