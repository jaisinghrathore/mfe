import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Landing from "../components/Landing"
import Pricing from "../components/Pricing"
import {Router} from "react-router-dom";
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles"
    
let generateClassName = createGenerateClassName({
    productionPrefix:'ma'
});

export default function App({history}) {
    return (
        <>
        <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
            <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
            </Switch>
            </Router>
        </StylesProvider>
        </>
    )
}
