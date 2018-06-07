import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Router, HashRouter, hashHistory, Route, Redirect, Switch, Link } from 'react-router-dom'
import Pubsub from 'pubsub-js'
import { MENU_LIST } from './config/menu_config';

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
                    toggled: false
                }
            })
        });
        Pubsub.subscribe('GO', (msg, item) => {
            this.setState({
                currentItem: item,
            })
        });
        Pubsub.subscribe('REQUEST', (msg, params) => {
            console.log(params, 'app-pubsub');
            var url = buildGetUrl(params);
            axios.get(url).then(function(response){
                if (response.data.code == '401') {
                    Tip.success('身份信息失效');
                    // window.location.href = "login";
                } else if (response.data.code == '200'){

                } else {
                    console.log(params, response.data.code);
                }
            }).catch(function(error) {
                var errObj = {
                    title: '请求错误',
                    content: error,
                    mainBtn: '我知道了'
                }
                Tip.popups(errObj);
            })
        })
    }

    componentWillUnmount() {
        Pubsub.unsubscribe('TOGGLE_MENU');
        Pubsub.unsubscribe('HIDE_MENU');
        Pubsub.unsubscribe('GO');
        Pubsub.unsubscribe('REQUEST');
    }

    render() {
        let view = this.state.currentItem.page;
        view = 'income';
        return (
            <div>
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
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/app' component={App} />
                </Switch>
            </HashRouter>
        );
    }
}


export default Root;
