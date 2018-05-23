import React from 'react'
import Pubsub from 'pubsub-js'
import { Link } from 'react-router-dom'
import '../less/menu.less'

// 目录配置子组件
function Menulist(props) {
    return (
        <ul onClick={this.goto.bind(e, menuItem)}>
            <Item img="icon_biview_chose.png" name="实时监控" />
            <Item img="icon_citykpi.png" name="城市KPI考核" />
            <Item img="icon_user.png" name="用户分析" />
            <Item img="icon_list.png" name="订单分析" />
            <Item img="icon_site.png" name="网点分析" />
            <Item img="icon_car.png" name="车辆分析" />
            <Item img="icon_service.png" name="客服分析" />
            <Item img="icon_operation.png" name="运营分析" />
            <Item img="icon_income.png" name="营收分析" />
            <Item img="icon_app.png" name="APP分析" />
        </ul>
    )
}

function Item(props) {
    return (
        <li>
            <img src={"/static/images/" + props.img} alt="" />
            <span>{props.name}</span>
        </li>
    )
}


// 组件内修改自身值, 此处只做个样例,没有实质性意义
class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: props.user}
    }

    render() {
        return (
            <div className="user-msg">
                <div className="user-icon"></div>
                <div className="nickname">{this.state.user.nickname}</div>
            </div>
        )
    }
}

function Logout() {
    return (
        <div className="logout">
            <Link to="/login">退出登陆</Link>
        </div>
    )
}

class Menu extends React.Component {
    hideMenu() {
        Pubsub.publish('HIDE_MENU');
    }

    render() {
        return (
            <div>
                <div className={this.props.menuState.toggled ? "menu-mask mask-show" : "menu-mask mask-hide"} onClick={this.hideMenu}></div>
                <div className={ this.props.menuState.toggled ? "components-menu menu-show" : this.props.menuState.firstIn ? "components-menu" : "components-menu menu-hide"}>
                    <Avatar user={this.props.user} />
                    <Menulist />
                    <Logout />
                </div>
            </div>
        );
    }
};

export default Menu;
