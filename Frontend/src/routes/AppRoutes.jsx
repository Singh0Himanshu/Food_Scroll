import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ChooseRegister from '../pages/auth/ChooseRegister'
import UserRegister from '../pages/auth/UserRegister'
import UserLogin from '../pages/auth/UserLogin'
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin'
import BottomNav from '../components/BottomNav'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/register" element={<ChooseRegister/>} />
            <Route path="/user/register" element={<UserRegister/>} />
            <Route path="/user/login" element={<UserLogin/>} />
            <Route path="/food-partner/register" element={<FoodPartnerRegister/>} />
            <Route path="/food-partner/login" element={<FoodPartnerLogin/>} />
            <Route path="/" element={<BottomNav/>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes
