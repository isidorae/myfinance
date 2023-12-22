import '../general.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function PaginationBtns() {

    return(
    <>
    <section className="d-flex align-items-center justify-content-center mt-3">
        <button className="btn-arrow d-flex align-self-center"><FaRegArrowAltCircleLeft /></button>
        <button className="btn-page">1</button>
        <button className="btn-page">2</button>
        <button className="btn-page">3</button>
        <button className="btn-arrow d-flex align-self-center"><FaRegArrowAltCircleRight /></button>
    </section>
    </>
    )
}

export default PaginationBtns