import AuthContext from '../../context/AuthContext'
import '../general.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


function LoginForm() {

    const { loginToApp, err, loading } = useContext(AuthContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function loginData(e){
        e.preventDefault()
        const data = {
            username,
            password
        }
        console.log(data)
        loginToApp(data)
    }
    return (
        <>
        <div className="d-flex flex-column">
            <div className="dashboard-items-container p-5">
                <h1>Iniciar Sesión</h1>
                {err && 
            <p className="err-msg mb-2 d-flex flex-wrap"><small>{err} </small></p>}
                <form onSubmit={loginData} className="d-flex flex-column">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="nombre de usuario" className="mb-1"></input>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="contraseña" className="mb-1"></input>
                    {loading
                    ? <button className="log-btn"><Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner></button>
                    : <button className="log-btn">Ingresar</button>}
                </form>
            </div>
            <p className="mt-2">
          ¿No tienes una cuenta? <Link  as={Link} to="/register" className="text-decoration-none">Registrate aquí</Link>.
            </p>
        </div>
        </>
    )
}

export default LoginForm