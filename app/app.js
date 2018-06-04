import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Router, HashRouter, hashHistory, Route, Redirect, Switch, Link } from 'react-router-dom'
import Pubsub from 'pubsub-js'
import { MENU_LIST } from './config/menu_config';

import Header from './components/header'
import Menu from './components/menu'
import Login from './pages/login'
import Watch from './pages/watch'
import Kpis from './pages/kpis'
import Inc from './pages/income'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuState: {
                toggled: false,
                firstIn: true
            },
            currentItem: MENU_LIST[0],
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
        Pubsub.subscribe('GO', (msg, item) => {
            this.setState({
                currentItem: item,
            })
        });
    }

    componentWillUnmount() {
        Pubsub.unsubscribe('TOGGLE_MENU');
        PubSub.unsubscribe('HIDE_MENU');
        PubSub.unsubscribe('GO');
    }

    render() {
        let view = this.state.currentItem.page;
        return (
            <div>
                <Header />
                <Menu
                    menuState={this.state.menuState}
                    user={this.state.user}
                    cItem={this.state.currentItem}
                ></Menu>
                { view == 'watch' && <Watch /> }
                { view == 'kpis' && <Kpis /> }
                { view == 'user' && <Watch /> }
                { view == 'app' && <Watch /> }
                { view == 'orders' && <Watch /> }
                { view == 'site' && <Watch /> }
                { view == 'cars' && <Watch /> }
                { view == 'service' && <Watch /> }
                { view == 'operation' && <Watch /> }
                { view == 'income' && <Inc /> }
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
