import { useParams } from "react-router-dom"


function UserInfo() {

    const { id } = useParams()
    console.log(id)

    return (
        <>
        <div className="frame-view-parent d-flex flex-column" >
        <h1>User Info</h1>
        <p>{id}</p>
        </div>
        </>
    )
}

export default UserInfo