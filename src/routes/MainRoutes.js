import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalculatorView from '../components/DashboardComps/CalculatorView';
import ClaimReward from '../components/DashboardComps/ClaimReward';
import DashboardView from '../components/DashboardComps/DashboardView';
import YieldSwap from '../components/DashboardComps/YieldSwap';
import AuthView from '../views/auth/AuthView';
import DashboardMainView from '../views/Dashboard/DashboardMainView';
import MainView from '../views/MainView';


const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/dashboardmainview" element={<DashboardMainView />} />
                <Route path="/dashboard" element={<DashboardView />} />
                <Route path="/dashboardmainview/claim" element={<ClaimReward />} />
                <Route path="/dashboardmainview/calculator" element={<CalculatorView />} />
                <Route path="/swap" element={<YieldSwap />} />
                <Route path="/auth" element={<AuthView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes