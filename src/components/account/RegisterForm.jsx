import "../general.css";
import { Link } from "react-bootstrap-icons";
import { useContext, useState } from 'react'
import AuthContext from "../../context/AuthContext";

function RegisterForm() {

  const { createAccount } = useContext(AuthContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  const registerUser = (e) => {
    e.preventDefault()

    if (password != confirm) {
      return console.log("contraseñas deben seguir iguales")
    }

    const data = {
      username,
      password
    }

    createAccount(data)

  }

  return (
    <>
      <div className=" d-flex flex-column">
        <div className="dashboard-items-container p-5">
          <h1>Registro de usuario</h1>
          <form onSubmit={registerUser} className="d-flex flex-column align-items-center">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="nombre de usuario"
              className="mb-1"
            ></input>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="contraseña"
              className="mb-1"
            ></input>
            <input
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              placeholder="confirmar contraseña"
              className="mb-1"
            ></input>
            <button className="log-btn">Registrar</button>
          </form>
        </div>
        <p className="mt-2">
          ¿Ya tienes una cuenta? <a href="/login" className="text-decoration-none">Inicia sesión</a>.
        </p>
      </div>
    </>
  );
}

export default RegisterForm;
