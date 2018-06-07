import React from 'react';
import { Link } from 'react-router-dom';
import Pubsub from 'pubsub-js';
import { MENU_LIST } from '../config/menu_config';
import '../less/login.less';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interface: 'loginOn',
            username: localStorage.user,
            password: localStorage.password,
        }
    }

    updateName(e) {
        this.setState({
            username: e.target.value
        });
    }

    updatePwd(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        var _loginDate = this.state;
        if (!_loginDate.username) {
            Tip.error('请输入用户名');
        } else if (!_loginDate.password) {
            Tip.error('请输入密码');
        } else {
            var url = buildGetUrl(_loginDate);
            axios.get(url).then(function(response) {
                if (response.data.code == 200) {
                    localStorage.user = _loginDate.username;
                    localStorage.password = _loginDate.password;
                    sessionStorage.token = response.data.data.token;
                    sessionStorage.nickname = response.data.data.nickname;
                    // TODO: user rights check
                    url = buildGetUrl({interface: 'getMenu'})
                    axios.get(url).then(function(res) {
                        if (res.data.code === 200) {
                            var rights = res.data.data;
                            if (!rights.length) {
                                Tip.error('您没有访问权限');
                            } else {
                                for (let r of rights) {
                                    for (let m of MENU_LIST) {
                                        if (r.menuId == m.id) {
                                            m.right = true;
                                        }
                                    }
                                }
                                window.location.href = '../#/app';
                            }
                        } else {
                            Tip.error(res.data.desc + "(" + res.data.code + ")");
                        }
                    }).catch(function(error) {
                        var errObj = {
                            title: '错误',
                            content: error,
                            mainBtn: '我知道了'
                        }
                        Tip.popups(errObj);
                    })
                } else {
                    Tip.error(response.data.desc +" ("+ response.data.code + ")");
                }
            }).catch(function(error) {
                var errObj = {
                    title: '错误',
                    content: error,
                    mainBtn: '我知道了'
                }
                Tip.popups(errObj);
            })
        }
    }

    render() {
        return (
            <div className="components-login">
                <img src="/static/images/gofun.png" />
                <div>
                    <img src="/static/images/login_user.png" />
                    <input type="text" value={this.state.username} onChange={this.updateName.bind(this)} placeholder="账号"/>
                </div>
                <div>
                    <img src="./static/images/login_password.png" />
                    <input type="password" value={this.state.password} onChange={this.updatePwd.bind(this)} placeholder="密码"/>
                </div>
                <div onClick={this.login.bind(this)}>登录</div>
            </div>
        );
    }
};

export default Login;
