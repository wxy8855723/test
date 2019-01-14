import React, {Component} from 'react'
import {Route,Redirect,BrowserRouter,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'


export default class App extends Component {
    render() {
        return (
         <BrowserRouter>
             <Switch>
             <Route path='/login' component={Login}/>
             <Route path='/' component={Admin}/>
             </Switch>
         </BrowserRouter>
        )
    }
}