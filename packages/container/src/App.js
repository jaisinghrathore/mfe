import React from 'react'
import MarketingApp from "./MarketingApp"
import {BrowserRouter} from "react-router-dom"

export default function App() {
    return (
        <>
        <BrowserRouter>
            <MarketingApp/>
        </BrowserRouter>
        </>
    )
}
