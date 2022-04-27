import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
import CadastroUsuario from '../views/cadastro-usuario'
import LandingPage from '../views/landingPage'
import { AuthConsumer } from './provedor-autenticacao'

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

function RotaAutenticada( { component: Component, isUsuarioAutenticado, ...props } ){
    return (
        <Route exact {...props} render={ (componentProps) => {
            if(isUsuarioAutenticado){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
                )
            }
        }}  />
    )
}

function Rotas(props){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default () => (
    <AuthConsumer>
        { (context) => (<Rotas isUsuarioAutenticado={context.isAutenticado} />) }
    </AuthConsumer>
)