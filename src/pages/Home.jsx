import '../components/general.css'

function Home () {

    return (
        <>
        <div className="frame-view-parent d-flex flex-column" >
            <h1>Organiza, Analiza y Optimiza <br></br>Tus Finanzas Personales</h1>
            <section className="d-flex flex-column p-container-home">
            <p className="fs-3">Una tarea importante que requiere tiempo, metodología y paciencia. </p>
            <p className="main-p">
                Con MyFinanceApp te facilitamos esta tarea. Comienza a organizar tus gastos e ingresos de forma clara y ordenada.
                Clasifica tus egresos (ej: Transporte, hogar, alimentos etc.) para luego ver areas de mejora.
                Anota y clasifica tus fuentes de ingreso y los montos. Lleva un historial de todos tus gastos, ordenados y organizados mes a mes.
            </p>
            <a href="/login" className="text-decoration-none">Comienza hoy!</a>
            </section>
        </div>
        </>
    )
}

export default Home