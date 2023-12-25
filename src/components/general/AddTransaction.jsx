import '../general.css'
import { useState } from 'react'
import { CalendarDay } from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function AddTransaction({placeholder, TransType}) {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [comment, setComment] = useState("")

    const [startDate, setStartDate] = useState(new Date());

    function gatherTransactionData(e) {

        e.preventDefault()

        let dateToString = JSON.stringify(startDate)
        console.log(dateToString)
        let SHORT_DATE = dateToString.slice(0,11)
        console.log(SHORT_DATE)
    //     let dateARR = dateToString.split(" ").splice(0,5)
    //    console.log(dateARR)
        const data = {
            title,
            amount,
            comment,
            type: TransType,
            date: SHORT_DATE
        }

        console.log(data)
    }

    return(
        <>
        <div>
            <form onSubmit={gatherTransactionData} className="d-flex flex-column">
                <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder={placeholder} className="mb-1" />
                <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="text" placeholder="Monto" className="mb-1" />
                <input value={comment} onChange={(e)=> setComment(e.target.value)} type="text" placeholder="Comentario" className="mb-1"/>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="mb-1 "/>
                <input defaultValue={startDate} type="text" hidden />
                <input defaultValue={TransType} type="text" hidden />
                <button type="submit" className="transaction-btn">Agregar</button>
            </form>
        </div>
        </>
    )
}

export default AddTransaction