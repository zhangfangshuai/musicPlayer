import React from 'react'
import '../less/login.less'

class Login extends React.Component {
    render() {
        return (
            <div className="components-login">
                <div className="username">
                    姓名<input type="text" value={this.props.name} />
                </div>
                <div className="password">
                    密码<input type="password" value={this.props.code} />
                </div>
                <div className="login-btn">登录</div>
            </div>
        );
    }
};

export default Login;
