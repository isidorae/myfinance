import "./dashboard.css"

function Card({icon: IconComponent, title, value, key, perc }) {

    return(
        <div key={key} className="dash-exp-card d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            < IconComponent  className="me-2"/>
            <p className="me-2">{title}</p>
        </div>
        <div className="d-flex">
            <p className="justify-self-end">${new Intl.NumberFormat().format(value)}</p>
            {perc > 0  ? <p className="ms-3">{perc}%</p> : null}
        </div>
    </div>
    )
}

export default Card