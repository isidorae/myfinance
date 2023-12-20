import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import Incomes from './pages/Incomes'
import Login from './pages/Login'
import Register from './pages/Register'
import UserInfo from './pages/UserInfo'


function App() {

  return (
    <>
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={< Login/>} />
        <Route path="/register" element={< Register />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/dashboard/expenses" element={< Expenses />} />
        <Route path="/dashboard/incomes" element={ < Incomes />} />
        <Route path="/dashboard/:id" element={ < UserInfo/>} />
        <Route path="/*" element={< Navigate to='/'/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
