import React from 'react'
import Pubsub from 'pubsub-js'
import '../less/header.less'

class Header extends React.Component {
    render() {
        return (
            <div className="components-header">
                <img className="menu-icon" src="/static/images/icon_menu.png" alt="" onClick={this.toggleMenu.bind(this)}/>
                <img className="logo-icon" src="/static/images/icon_logo.png" alt="" />
                <div className="location">北京</div>
                <img src="/static/images/icon_location.png" alt="" className="location-icon" />
            </div>
        );
    }

    toggleMenu(e) {
        console.log("TODO: pubsub publish");
        // e.stopPropagation();  // 阻止事件冒泡行为
        Pubsub.publish('TOGGLE_MENU');
    }
};

export default Header;
