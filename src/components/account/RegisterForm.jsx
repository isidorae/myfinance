import "../general.css";
import { Link } from "react-bootstrap-icons";

function RegisterForm() {
  return (
    <>
      <div className=" d-flex flex-column">
        <div className="dashboard-items-container p-5">
          <h1>Registro de usuario</h1>
          <form className="d-flex flex-column align-items-center">
            <input
              type="text"
              placeholder="nombre de usuario"
              className="mb-1"
            ></input>
            <input
              type="password"
              placeholder="contraseña"
              className="mb-1"
            ></input>
            <input
              type="confirm"
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
