

function AddTransaction({placeholder, TransType}) {

    return(
        <>
        <div>
            <form className="d-flex flex-column">
                <input type="text" placeholder={placeholder} className="mb-1" />
                <input type="text" placeholder="Monto" className="mb-1" />
                <input type="text" placeholder="Comentario" className="mb-1"/>
                <input type="text" value={TransType} hidden />
                <button className="transaction-btn">Agregar</button>
            </form>
        </div>
        </>
    )
}

export default AddTransaction