import MainStruct from "../components/dashboard/MainStruct"
import DateComponent from "../components/general/DateComponent"


function Dashboard() {

    return (
        <>
        <div className="d-flex flex-column justify-content-center frame-view-parent">
        <h1 className="mt-5">Hola @Usuario</h1>
        <DateComponent />
        <MainStruct/>
        </div>
        </>
    )
}

export default Dashboard