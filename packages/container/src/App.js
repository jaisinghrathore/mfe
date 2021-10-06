import React from 'react'
import MarketingApp from "./MarketingApp"
import {BrowserRouter} from "react-router-dom"
import Header from './Header'

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Header/>
            <MarketingApp/>
        </BrowserRouter>
        </>
    )
};