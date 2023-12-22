import '../general.css'

function LoginForm() {

    return (
        <>
        <div className="d-flex flex-column">
            <div className="dashboard-items-container p-5">
                <h1>Iniciar Sesión</h1>
                <form className="d-flex flex-column">
                    <input type="text" placeholder="nombre de usuario" className="mb-1"></input>
                    <input type="password" placeholder="contraseña" className="mb-1"></input>
                    <button className="log-btn">Ingresar</button>
                </form>
            </div>
            <p className="mt-2">
          ¿No tienes una cuenta? <a href="/register" className="text-decoration-none">Registrate aquí</a>.
            </p>
        </div>
        </>
    )
}

export default LoginForm