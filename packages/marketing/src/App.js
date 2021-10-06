import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Landing from "../components/Landing"
import Pricing from "../components/Pricing"
import {BrowserRouter} from "react-router-dom";
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles"

export default function App() {
    
    let generateClassName = createGenerateClassName({
        productionPrefix:'ma'
    });



    return (
        <>
        <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
            </Switch>
            </BrowserRouter>
        </StylesProvider>
        </>
    )
}
