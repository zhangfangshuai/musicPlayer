import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { HashRouter, hashHistory, Route, Switch, Link } from 'react-router-dom'

import Login from './components/login'
import Header from './components/header'
import Menu from './components/menu'


class Pages extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Menu></Menu>
            </div>
        );
    }
}


class Root extends React.Component {
    render() {
        return (
            <HashRouter history={hashHistory}>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/login' component={Login} />
                    <Route path='/mobile' component={Pages} />
                </Switch>
            </HashRouter>
        );
    }
}


export default Root;
