import React from 'react'
import Login from './components/login'
import Header from './components/header'
import Menu from './components/menu'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'
// 声明一个React组件  es5使用 createClass, es6使用class
// let Root = React.createClass({
class Page extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Menu></Menu>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Login name={sessionStorage.username} code={sessionStorage.password} />
            </div>
        );
    }
}

class Root extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <IndexRoute component={App}></IndexRoute>
                <Route path="/watch" component={Page}>

                </Route>
            </Router>
        );
    }
};

export default Root;
