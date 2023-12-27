import "./dashboard.css"

function Card({icon: IconComponent, title, value, key }) {

    return(
        <div key={key} className="dash-exp-card d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
            < IconComponent  className="me-2"/>
            <p className="me-2">{title}</p>
        </div>
        <div>
            <p className="justify-self-end">${value}</p>
        </div>
    </div>
    )
}

export default Card