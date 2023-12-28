import '../general.css'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function PaginationBtns({arrowsFunction, data, itemsPerPage, setPageIndex, pageIndex}) {

    return(
    <>
    <section className="d-flex align-items-center justify-content-center mt-3">
    {data.length === 0
    ? null 
    :  <>
    <button onClick={() => {arrowsFunction("prev")}} className="btn-arrow d-flex align-self-center"><FaRegArrowAltCircleLeft /></button>
        {Array.from({length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => {
            return <>
            <button key={index} className={`btn-page ${index === pageIndex ? 'page-active' : ''}`} onClick={() => setPageIndex(index)}>{index + 1}</button>
            </>
        })}
        <button onClick={() => {arrowsFunction("next")}} className="btn-arrow d-flex align-self-center"><FaRegArrowAltCircleRight /></button>
    </>}
    </section>
    </>
    )
}

export default PaginationBtns