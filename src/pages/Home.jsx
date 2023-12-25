import '../components/general.css'

function Home () {

    return (
        <>
        <div className="frame-view-parent d-flex flex-column" >
            <h1>Organiza, Analiza y Optimiza <br></br>Tus Finanzas Personales</h1>
            <section className="d-flex flex-column p-container-home">
            <p className="fs-3">Una tarea importante que requiere tiempo, metodología y paciencia. </p>
            <p className="main-p">
                Con MyFinanceApp te facilitamos esta tarea. Lleva un historial de todos tus gastos e ingresos, clasificados de forma clara, precisa y ordenada. 
            </p>
            <a href="/login" className="text-decoration-none">Comienza hoy!</a>
            </section>
        </div>
        </>
    )
}

export default Home