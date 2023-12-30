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

  //filtrar por categoria, luego sumar amounts
  function calculateCategorySum(data, categoryName) {
    let categorySum = 0;

    data
    .filter(expense => expense.category == categoryName)
    .forEach(expense => {
      let amountToInt = parseInt(expense.amount);
      categorySum += amountToInt;
    })

    return categorySum;
  }

  let foodSum = calculateCategorySum(expensesData, "alimentación");
  let healthSum = calculateCategorySum(expensesData, "salud e higiene");
  let homeSum = calculateCategorySum(expensesData, "hogar");
  let transportSum = calculateCategorySum(expensesData, "transporte");
  let accountsSum = calculateCategorySum(expensesData, "cuentas");
  let dressSum = calculateCategorySum(expensesData, "vestuario");
  let educationSum = calculateCategorySum(expensesData, "educación");
  let recreationSum = calculateCategorySum(expensesData, "entretención");
  let tecnoSum = calculateCategorySum(expensesData, "tecnología");
  let beautySum = calculateCategorySum(expensesData, "estética y belleza");
  let travelSum = calculateCategorySum(expensesData, "viajes");
  let otherSum = calculateCategorySum(expensesData, "otros");
  let petsSum = calculateCategorySum(expensesData, "mascotas");
  let investSum = calculateCategorySum(expensesData, "inversión");

  let cardsArr = [
    {title: "Alimentación", value: foodSum, icon: PiBowlFoodFill, index: "0"},
    {title: "Salud e Higiene", value: healthSum, icon: RiMentalHealthLine, index: "1"},
    {title: "Hogar", value: homeSum, icon: BiHomeHeart, index: "2"},
    {title: "Cuentas", value: accountsSum, icon: IoNewspaperOutline, index: "3"},
    {title: "Transporte", value: transportSum, icon: FaCarSide, index: "4"},
    {title: "Vestuario", value: dressSum, icon: GiTravelDress, index: "5"},
    {title: "Educación", value: educationSum, icon: IoSchoolSharp, index: "6"},
    {title: "Inversión", value: investSum, icon: RiStockLine, index: "7"},
    {title: "Tecnología", value: tecnoSum, icon: FaComputer, index: "8"},
    {title: "Estética y Belleza", value: beautySum, icon: PiShootingStarBold, index: "9"},
    {title: "Entretención", value: recreationSum, icon: PiMaskHappy, index: "10"},
    {title: "Mascotas", value: petsSum, icon: MdOutlinePets, index: "11"},
    {title: "Viajes", value: travelSum, icon: SiYourtraveldottv, index: "12"},
    {title: "Otros", value: otherSum, icon: PiDotsThreeCircle, index: "13"},
  ]

    cardsArr.sort((a, b) => b.value - a.value);

    return (
        <>
        <h2>Resumen Gastos</h2>
                        <section className="box-container d-flex flex-column justify-content-center">
                          {cardsArr.map(({title, value, icon, index})=> {
                            return <Card key={index}  icon={icon} title={title} value={value} />
                          })
                          }
                        </section>
        </>
    )
}

export default ExpensesDashboard;