import React from 'react'
import '../less/menu.less'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className="menu-mask"></div>
                <div className="components-menu">
                    <div className="user-msg">
                        <div className="user-icon"></div>
                        <div className="nickname">张国光</div>
                    </div>
                    <ul>
                        <li>
                            <img src="/static/images/icon_biview_chose.png" alt="" />
                            <span>实时监控</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_citykpi.png" alt="" />
                            <span>城市KPI考核</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_user.png" alt="" />
                            <span>用户分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_list.png" alt="" />
                            <span>订单分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_site.png" alt="" />
                            <span>网点分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_car.png" alt="" />
                            <span>车辆分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_service.png" alt="" />
                            <span>客服分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_operation.png" alt="" />
                            <span>运营分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_income.png" alt="" />
                            <span>营收分析</span>
                        </li>
                        <li>
                            <img src="/static/images/icon_app.png" alt="" />
                            <span>APP分析</span>
                        </li>
                    </ul>
                    <div className="logout">退出登陆</div>
                </div>
            </div>
        );
    }
};

export default Menu;
