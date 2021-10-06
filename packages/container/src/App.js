import React from 'react'
import MarketingApp from "./MarketingApp"
import {BrowserRouter} from "react-router-dom"
import Header from './Header'
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles"

export default function App() {

    let generateClassName = createGenerateClassName({
        productionPrefix:'co'
    });

    
    return (
        <>
        <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Header/>
            <MarketingApp/>
        </BrowserRouter>
        </StylesProvider>
        </>
    )
};