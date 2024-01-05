import '../general.css'
import { useState, useContext } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import TransactionContext from '../../context/TransactionContext';
import AuthContext from '../../context/AuthContext';

function AddTransaction({placeholder, TransType, categories, setReloadData}) {

    const { sendTransactionReq, getTransactionData } = useContext(TransactionContext)
    const { userData, token } = useContext(AuthContext)

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [comment, setComment] = useState("")
    const [selected, setSelected] = useState("")

    const [startDate, setStartDate] = useState(new Date());

    let userId = userData.id

    const CATEGORIES_SORTED = categories.sort()

    let amountRegEx = (/^[0-9]*$/.test(amount))

    function gatherTransactionData(e) {

        e.preventDefault()

        let dateToString = JSON.stringify(startDate)
        let SHORT_DATE = dateToString.slice(1,11)
        let shortDateArr = SHORT_DATE.split("-")
        let SHORT_DATE_DD_MM_YY = `${shortDateArr[2]}/${shortDateArr[1]}/${shortDateArr[0].slice(2,4)}`
        let categoryLowerCase = selected.toLowerCase()

        if (!amountRegEx) {
            return console.log("Debes ingresar solo numeros")
        }

        const data = {
            category: categoryLowerCase,
            title,
            amount,
            comment,
            transaction_type: TransType,
            date: SHORT_DATE_DD_MM_YY,
            user_id: userId
        }

        console.log(data)

        sendTransactionReq(data, TransType, token)
        .then(() => {
            // setReloadData(true)
            resetValues()
            if(TransType === "income") {
                getTransactionData("income", userId, token)
            } else {
                getTransactionData("expense", userId, token)
            }
      
        })
        .catch((error) => {
            console.error("error sending Transaction: ", error);
        })

    }

    function resetValues() {
        return setSelected(""),
        setTitle(""),
        setAmount(""),
        setComment(""),
        setStartDate(new Date())
    }

    return(
        <>
        <div>
            <form onSubmit={gatherTransactionData} className="d-flex flex-column">
                <select value={selected} name="category" onChange={(e) => setSelected(e.target.value)} className="select-input mb-1">
                    <option>--Categoría--</option>
                        {CATEGORIES_SORTED.map((category, index) => {
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