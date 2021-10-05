import React from 'react'
import MarketingApp from "./MarketingApp"
import {BrowserRouter} from "react-router-dom"
import DashboardApp from "./DashboardApp"

export default function App() {
    return (
        <>
        <BrowserRouter>
            <DashboardApp/>
            <MarketingApp/>
        </BrowserRouter>
        </>
    )
};