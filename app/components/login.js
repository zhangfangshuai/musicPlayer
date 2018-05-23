import React from 'react'
import { Link } from 'react-router-dom'
import '../less/login.less'

class Login extends React.Component {

    render() {
        return (
            <div className="components-login">
                <img src="/static/images/icon_logo.png" />
                <div>
                    <img src="/static/images/user.png" />
                    <input type="text" value="zhanguoguang" ref={(input) => { this.name; }} />
                </div>
                <div>
                    <img src="./static/images/password.png" />
                    <input type="password" value="20042281" ref={(input) => { this.code; }}/>
                </div>
                <div><Link to="/app">登录</Link></div>
            </div>
        );
    }

    login(e) {
        console.log('TODO: user rights check')
    }
};

export default Login;
