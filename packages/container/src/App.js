import React from 'react'
import MarketingApp from "./MarketingApp"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import AuthApp from "./AuthApp"
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
            <Switch>
            <Route exact path="/" component={MarketingApp} ></Route>
            <Route path="/auth" component={AuthApp} ></Route>
            </Switch>
            <MarketingApp/>
        </BrowserRouter>
        </StylesProvider>
        </>
    )
};