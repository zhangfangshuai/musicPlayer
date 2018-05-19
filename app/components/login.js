import React from 'react'
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
                <div onClick={this.login}>登录</div>
            </div>
        );
    }

    login(e) {
        console.log('user want to login')
    }
};

export default Login;
