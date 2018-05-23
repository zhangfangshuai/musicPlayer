import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Router, HashRouter, hashHistory, Route, Redirect, Switch, Link } from 'react-router-dom'
import Pubsub from 'pubsub-js'

import Login from './components/login'
import Header from './components/header'
import Menu from './components/menu'
import Watch from './pages/watch'
import Kpis from './pages/kpis'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'watch',
            menuState: {
                toggled: false,
                firstIn: true
            },
            user: {
                nickname: '张国光',
                picture: ''
            }
        }
    }

    componentDidMount() {
        Pubsub.subscribe('TOGGLE_MENU', () => {
            this.setState({
                menuState: {
                    toggled: true,
                    firstIn: false
                }
            })
        });
        Pubsub.subscribe('HIDE_MENU', () => {
            this.setState({
                menuState: {
                    toggled: false
                }
            })
        });
    }

    componentWillUnmount() {
        Pubsub.unsubscribe('TOGGLE_MENU');
        PubSub.unsubscribe('HIDE_MENU');
    }

    render() {
        return (
            <div>
                <Header />
                <Menu menuState={this.state.menuState} user={this.state.user} />
                { this.state.page == 'watch' && <Watch /> }
                { this.state.page == 'kpis' && <Kpis /> }
            </div>
        );
    }
}



class Root extends React.Component {

    render() {
        return (
            <HashRouter history={hashHistory}>
                <Switch>
                    <Route exact path='/' component={ () => <Redirect to='/login' /> } />
                    <Route path='/login' component={Login} />
                    <Route exact path='/app' component={App} />
                </Switch>
            </HashRouter>
        );
    }
}


export default Root;
