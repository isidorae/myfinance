import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'

import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import Incomes from './pages/Incomes'
import Login from './pages/Login'
import Register from './pages/Register'
import UserInfo from './pages/UserInfo'
import Transactions from './pages/Transactions'

import { DateProvider } from './context/DateContext'
import { TransactionProvider } from './context/TransactionContext'

function App() {

  return (
    <>
      <TransactionProvider>
      <NavbarComp/>
      <DateProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={< Login/>} />
          <Route path="/register" element={< Register />} />
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/dashboard/expenses" element={< Expenses />} />
          <Route path="/dashboard/incomes" element={ < Incomes />} />
          <Route path="/dashboard/:id" element={ < UserInfo/>} />
          <Route path="/history" element={ < Transactions/>} />
          <Route path="/*" element={< Navigate to='/'/>} />
        </Routes>
      </DateProvider>
      <Footer/>
      </TransactionProvider>
    </>
  )
}

export default App
