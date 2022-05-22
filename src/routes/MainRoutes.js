import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthView from '../views/auth/AuthView';
import DashboardMainView from '../views/Dashboard/DashboardMainView';
import MainView from '../views/MainView';


const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/dashboard" element={<DashboardMainView />} />
                <Route path="/auth" element={<AuthView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes