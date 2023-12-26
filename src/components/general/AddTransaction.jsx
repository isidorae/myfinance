import '../general.css'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { categories } from './categories.json'
import "react-datepicker/dist/react-datepicker.css";

function AddTransaction({placeholder, TransType}) {

    const [category, setCategory] = useState("")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [comment, setComment] = useState("")

    const [startDate, setStartDate] = useState(new Date());

    function gatherTransactionData(e) {

        e.preventDefault()

        let dateToString = JSON.stringify(startDate)
        let SHORT_DATE = dateToString.slice(1,11)
        let shortDateArr = SHORT_DATE.split("-")
        let SHORT_DATE_DD_MM_YY = `${shortDateArr[2]}/${shortDateArr[1]}/${shortDateArr[0].slice(2,4)}`
        let categoryLowerCase = category.toLowerCase()


        const data = {
            category: categoryLowerCase,
            title,
            amount,
            comment,
            type: TransType,
            date: SHORT_DATE_DD_MM_YY
        }

        console.log(data)
    }

    return(
        <>
        <div>
            <form onSubmit={gatherTransactionData} className="d-flex flex-column">
                <select name="category" onChange={(e) => setCategory(e.target.value)} className="select-input mb-1">
                    <option>--Categoría--</option>
                        {categories.map((category, index) => {
                            return <option key={index} value={category}>{category}</option>
                        })}
                </select>
                <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder={placeholder} className="mb-1" />
                <input value={amount} onChange={(e)=> setAmount(e.target.value)} type="text" placeholder="Monto" className="mb-1" />
                <input value={comment} onChange={(e)=> setComment(e.target.value)} type="text" placeholder="Comentario **opcional" className="mb-1"/>
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