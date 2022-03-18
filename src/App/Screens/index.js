import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './Layout/Layout'
import HomeScreen from './HomeScreen/HomeScreen'
import LoginScreen from './LoginScreen/LoginScreen'
import Gsheet from './GsheetScreen/GsheetScreen'

const Screens = () => {

    const LayoutRoute = (Component, ...rest) => {
        let Comp = Component.component
        return(
          <Layout>
            <Route 
            {...rest}
            render={props => {
              return (
                <Comp {...props}/>
              )
            }
            }>
            </Route>
          </Layout>
        )
      }

  return (
    <Switch>
      <LayoutRoute path="/home" component={HomeScreen}/>
      <LayoutRoute path="/login" component={LoginScreen}/>
      <LayoutRoute path="/gsheet" component={Gsheet}/>
      <Route path="/" component={() => <Redirect to={'/home'} />} />
    </Switch>
  )
}

export default Screens 