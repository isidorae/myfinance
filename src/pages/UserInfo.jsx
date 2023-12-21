
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function UserInfo() {

    const { id } = useParams()
    console.log(id)

    const [isChecked, setChecked] = useState([])

    function addCheckedToArr(e) {
        let checked = e.target.checked
        let value = e.target.value
        console.log(checked)
        console.log(value)

        if (checked) { //add to array
            for (let i = 0; i < isChecked.length; i++) {
                if (isChecked[i] == value) {
                    return;
                }
            }
            return setChecked(...isChecked, value)

        } else { //remove from array
            const newArr = isChecked.filter(el => {
                console.log(el)
                return el != e.target.value
            })
            return setChecked([newArr])
        }
    }

    console.log(isChecked)



    return (
        <>
        <div className="frame-view-parent d-flex flex-column" >
        <h1>User Info</h1>
        <p>{id}</p>
            <section>
                <p>Email:</p>
            </section>
            <section>
                <h2>CATEGORIAS DE GASTOS</h2>
                <p>Elige las categorías que son relevantes en tu vida.</p>
                <Container>
                    <Row>
                        <Col className="d-flex flex-column align-items-start">
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Alimentos" type="checkbox" name="food" defaultChecked/>
                                <label htmlFor="food">Alimentos</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Salud e Higiene" type="checkbox" name="health" defaultChecked/>
                                <label htmlFor="health">Salud e Higiene</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Transporte" type="checkbox" name="transport" defaultChecked/>
                                <label htmlFor="transport">Transporte</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Hogar" type="checkbox" name="home" defaultChecked/>
                                <label htmlFor="home">Hogar</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Cuentas" type="checkbox" name="accounts" defaultChecked/>
                                <label htmlFor="accounts">Cuentas</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Vestuario" type="checkbox" name="clothe" defaultChecked/>
                                <label htmlFor="clothe">Vestuario</label>
                            </div>
                        </Col>
                        <Col className="d-flex flex-column align-items-start">
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Diversión/Placer" type="checkbox" name="entertainment" defaultChecked/>
                                <label htmlFor="entertainment">Diversión/Placer</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Educación" type="checkbox" name="education" defaultChecked/>
                                <label htmlFor="education">Educación</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Tecnologías" type="checkbox" name="tecno" defaultChecked/>
                                <label htmlFor="tecno">Tecnologías</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Estética/Belleza" type="checkbox" name="beauty" defaultChecked/>
                                <label htmlFor="beauty">Estética/Belleza</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Viajes" type="checkbox" name="travel" defaultChecked/>
                                <label htmlFor="travel">Viajes</label>
                            </div>
                            <div>
                                <input onChange={e =>  addCheckedToArr(e)} value="Otros" type="checkbox" name="other" defaultChecked/>
                                <label htmlFor="other">Otros</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                    {/* <input type="checkbox" name="food" checked/>
                    <label for="food">Alimentos</label>
                    <input type="checkbox" name="health" checked/>
                    <label for="health">Salud e Higiene</label>
                    <input type="checkbox" name="transport" checked/>
                    <label for="transport">Transport</label>
                    <input type="checkbox" name="home" checked/>
                    <label for="home">Hogar</label>
                    <input type="checkbox" name="accounts" checked/>
                    <label for="accounts">Cuentas</label>
                    <input type="checkbox" name="clothe" checked/>
                    <label for="clothe">Vestuario</label>
                    <input type="checkbox" name="entertainment" checked/>
                    <label for="entertainment">Diversión/Placer</label>
                    <input type="checkbox" name="education" checked/>
                    <label for="education">Educación</label>
                    <input type="checkbox" name="tecno" checked/>
                    <label for="tecno">Tecnologías</label>
                    <input type="checkbox" name="beauty" checked/>
                    <label for="beauty">Estética/Belleza</label>
                    <input type="checkbox" name="other" checked/>
                    <label for="other">Otros</label> */}
                </Container>
            </section>
        </div>
        </>
    )
}

export default UserInfo