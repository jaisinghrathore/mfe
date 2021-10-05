import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Landing from "../components/Landing"
import Pricing from "../components/Pricing"
import {StylesProvider} from "@material-ui/core/styles"
import {BrowserRouter} from "react-router-dom";

export default function App() {
    
    return (
        <>
        <StylesProvider>
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
