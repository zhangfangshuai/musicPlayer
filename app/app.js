import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Router, HashRouter, hashHistory, Route, Redirect, Switch, Link } from 'react-router-dom'
import Pubsub from 'pubsub-js'
import { MENU_LIST } from './config/menu_config';
import { CITY_LIST } from './config/city_config';

import Menu from './components/menu'
import Picker from './components/picker'
import Login from './pages/login'
import Watch from './pages/watch'
import Kpis from './pages/kpis'
import Income from './pages/income'


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentMenu: MENU_LIST[0],
            menuState: {
                toggled: false,
                firstIn: true
            },
            currentCity: CITY_LIST[0],
            cityState: {
                toggled: false,
                firstIn: true,
            },
            user: {
                nickname: sessionStorage.nickname,
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
                    toggled: false,
                    firstIn: false
                }
            })
        });
        Pubsub.subscribe('GO', (msg, item) => {
            this.setState({ currentMenu: item });
        });
        Pubsub.subscribe('TOGGLE_CITY', () => {
            this.setState({
                cityState: {
                    toggled: true,
                    firstIn: false
                }
            })
        })
        Pubsub.subscribe('HIDE_CITY', () => {
            this.setState({
                cityState: {
                    toggled: false,
                    firstIn: false
                }
            })
        });
        Pubsub.subscribe('CITY_SELECTED', (msg, item) => {
            this.setState((prevState) => {
                prevState.currentCity = item;
            });
        });
    }

    componentWillUnmount() {
        Pubsub.unsubscribe('TOGGLE_MENU');
        Pubsub.unsubscribe('HIDE_MENU');
        Pubsub.unsubscribe('GO');
        Pubsub.unsubscribe('TOGGLE_CITY');
        Pubsub.unsubscribe('HIDE_CITY');
        Pubsub.unsubscribe('CITY_SELECTED');
    }

    render() {
        let view = this.state.currentMenu.id;
        view = 10;
        return (
            <div>
                <Menu menuState={this.state.menuState} user={this.state.user} cItem={this.state.currentMenu} />
                <Picker cityState={this.state.cityState} />
                { view == 2 && <Watch city={this.state.currentCity}/> }
                { view == 3 && <Kpis city={this.state.currentCity}/> }
                { view == 4 && <Watch city={this.state.currentCity}/> }
                { view == 64 && <Watch city={this.state.currentCity}/> }
                { view == 5 && <Watch city={this.state.currentCity}/> }
                { view == 6 && <Watch city={this.state.currentCity}/> }
                { view == 7 && <Watch city={this.state.currentCity}/> }
                { view == 8 && <Watch city={this.state.currentCity}/> }
                { view == 9 && <Watch city={this.state.currentCity}/> }
                { view == 10 && <Income city={this.state.currentCity}/> }
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
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/app' component={App} />
                </Switch>
            </HashRouter>
        );
    }
}


export default Root;
