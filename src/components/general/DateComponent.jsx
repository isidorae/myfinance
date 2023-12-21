
function DateComponent() {

    return (
        <>
        <div className="mb-4">
            <div className="d-flex justify-content-center">
                <p className="me-2">Fecha hoy:</p>
                <p>24/12/23</p>
            </div>
            <label className="me-2">Resumen Mes</label>
            <select name="date" value="date">
                <option>Enero</option>
                <option>Diciembre</option>

            </select>
            <label className="ms-2 me-2">y Año </label>
            <select name="year" value="year">
                <option>2023</option>
                <option>2024</option>
            </select>
        </div>
        </>
    )
}

export default DateComponent