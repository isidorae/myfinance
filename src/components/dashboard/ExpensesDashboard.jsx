import "./dashboard.css"

import Card from "./Card";

// https://react-icons.github.io/react-icons/
import { PiBowlFoodFill } from "react-icons/pi";
import { SiYourtraveldottv } from "react-icons/si";
import { RiMentalHealthLine } from "react-icons/ri";
import { IoNewspaperOutline } from "react-icons/io5";
import { GiTravelDress } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { PiShootingStarBold } from "react-icons/pi";
import { PiDotsThreeCircle } from "react-icons/pi";
import { PiMaskHappy } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";
import { RiStockLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";


function ExpensesDashboard ({expensesData}) {

  console.log("***** expenses dashboard ******")
  console.log(expensesData)

    return (
        <>
        <h2>Resumen Gastos</h2>
                        <section className="box-container d-flex flex-column justify-content-center">
                          {/* {expensesData.map((expense) => {
                             return <Card 
                             icon={PiBowlFoodFill}
                             key={expense._id}
                             title={expense.category}
                             value={expense.amount}
                             />
                          })} */}
                            <Card 
                            icon={PiBowlFoodFill}
                            title="Alimentación"
                            value="30000"
                            />
                            <Card 
                            icon={RiMentalHealthLine}
                            title="Salud e Higiene"
                            value="1000"
                            />
                             <Card 
                            icon={BiHomeHeart}
                            title="Hogar"
                            value="5000"
                            />
                            <Card 
                            icon={IoNewspaperOutline}
                            title="Cuentas"
                            value="1000"
                            />
                             <Card 
                            icon={FaCarSide}
                            title="Transporte"
                            value="25000"
                            />
                             <Card 
                            icon={GiTravelDress}
                            title="Vestuario"
                            value="2000"
                            />
                             <Card 
                            icon={IoSchoolSharp}
                            title="Educación"
                            value="5000"
                            />
                             <Card 
                            icon={RiStockLine}
                            title="Inversión"
                            value="5000"
                            />
                              <Card 
                            icon={FaComputer}
                            title="Tecnología"
                            value="1000"
                            />
                              <Card 
                            icon={PiMaskHappy}
                            title="Diversión/Placer"
                            value="5000"
                            />
                             <Card 
                            icon={PiShootingStarBold}
                            title="Estética/Belleza"
                            value="500"
                            />
                            <Card 
                            icon={ MdOutlinePets }
                            title="Mascotas"
                            value="500"
                            />
                             <Card 
                            icon={SiYourtraveldottv}
                            title="Viajes"
                            value="1000"
                            />
                             <Card 
                            icon={PiDotsThreeCircle }
                            title="Otros"
                            value="2000"
                            />
                        </section>
        </>
    )
}

export default ExpensesDashboard;