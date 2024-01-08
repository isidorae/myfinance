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

function ExpensesDashboard ({expensesObj, percentage}) {

  let cardsArr = [
    {title: "Alimentación", value: expensesObj.foodSum, icon: PiBowlFoodFill, index: "0", perc: percentage.food_p},
    {title: "Salud e Higiene", value: expensesObj.healthSum, icon: RiMentalHealthLine, index: "1", perc: percentage.health_p},
    {title: "Hogar", value: expensesObj.homeSum, icon: BiHomeHeart, index: "2", perc: percentage.home_p},
    {title: "Cuentas", value: expensesObj.accountsSum, icon: IoNewspaperOutline, index: "3", perc: percentage.accounts_p},
    {title: "Transporte", value: expensesObj.transportSum, icon: FaCarSide, index: "4", perc: percentage.transport_p},
    {title: "Vestuario", value: expensesObj.dressSum, icon: GiTravelDress, index: "5", perc: percentage.dress_p},
    {title: "Educación", value: expensesObj.educationSum, icon: IoSchoolSharp, index: "6", perc: percentage.education_p},
    {title: "Inversión", value: expensesObj.investSum, icon: RiStockLine, index: "7", perc: percentage.invest_p},
    {title: "Tecnología", value: expensesObj.tecnoSum, icon: FaComputer, index: "8", perc: percentage.tecno_p},
    {title: "Estética y Belleza", value: expensesObj.beautySum, icon: PiShootingStarBold, index: "9", perc: percentage.beauty_p},
    {title: "Entretención", value: expensesObj.recreationSum, icon: PiMaskHappy, index: "10", perc: percentage.recreation_p},
    {title: "Mascotas", value: expensesObj.petsSum, icon: MdOutlinePets, index: "11", perc: percentage.pets_p},
    {title: "Viajes", value: expensesObj.travelSum, icon: SiYourtraveldottv, index: "12", perc: percentage.travel_p},
    {title: "Otros", value: expensesObj.otherSum, icon: PiDotsThreeCircle, index: "13", perc: percentage.other_p},
  ]

    cardsArr.sort((a, b) => b.value - a.value);

    return (
        <>
        <h2>Resumen Gastos</h2>
                        <section className="box-container d-flex flex-column justify-content-center">
                          {cardsArr.map(({title, value, icon, perc, index})=> {
                            return <Card key={index}  icon={icon} title={title} value={value} perc={perc} />
                          })
                          }
                        </section>
        </>
    )
}

export default ExpensesDashboard;