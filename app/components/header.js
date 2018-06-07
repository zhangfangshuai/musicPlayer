import React from 'react'
import Pubsub from 'pubsub-js'
import '../less/header.less'

class Header extends React.Component {
    render() {
        return (
            <div className="components-header">
                <img className="menu-icon" src="/static/images/icon_menu.png" alt="" onClick={this.toggleMenu.bind(this)}/>
                <img className="logo-icon" src="/static/images/gofun.png" alt="" />
                <div className="location" onClick={this.selectCity.bind(this)}>北京</div>
                <img src="/static/images/icon_location.png" alt="" className="location-icon" />
            </div>
        );
    }

    toggleMenu(e) {
        e.stopPropagation();
        Pubsub.publish('TOGGLE_MENU');
    }

    selectCity(e) {
        e.stopPropagation();
        console.log('selectCity');
    }
};

export default Header;
