import React, { Suspense } from 'react'
import {Route,Redirect,Switch} from "react-router-dom"
import Header from './Header'
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles"
const MarketingApp = React.lazy(()=>import('./MarketingApp'))
const DashboardApp = React.lazy(()=>import('./DashboardApp'))
const AuthApp = React.lazy(()=>import('./AuthApp'))
import CircularProgress from '@material-ui/core/CircularProgress';

export default function App() {

    let generateClassName = createGenerateClassName({
        productionPrefix:'co'
    });    
    return (
        <>
            <Suspense fallback={<Loading/>}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header/>
            
            <Switch>
            <Route path="/auth" component={AuthApp} ></Route>
            <Route exact path="/" component={MarketingApp} ></Route>
            <Route  exact path="/dashboard">
               {true ? <DashboardApp/> : <Redirect to="/auth/signin" />}
            </Route>
            </Switch>
            <MarketingApp/>
          </div>
        </StylesProvider>
        </Suspense>
        </>
    )};

const Loading = () =>{
    return(
    <div style={{width:"100%",height:"100vh",display:"grid",placeItems:'center'}} >
      <CircularProgress color="success" />
    </div>
    )};