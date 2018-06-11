import React from 'react'
import Pubsub from 'pubsub-js'
import '../less/header.less'

class Header extends React.Component {
    render() {
        return (
            <div className="components-header">
                <img className="menu-icon" src="/static/images/icon_menu.png" alt="" onClick={this.toggleMenu.bind(this)}/>
                <img className="logo-icon" src="/static/images/gofun.png" alt="" />
                <div className="location" onClick={this.toggleCity.bind(this)}>{this.props.city.text}</div>
                <img className="location-icon" src="/static/images/icon_location.png" alt="" onClick={this.toggleCity.bind(this)}/>
            </div>
        );
    }

    toggleMenu(e) {
        e.stopPropagation();
        Pubsub.publish('TOGGLE_MENU');
    }

    toggleCity(e) {
        e.stopPropagation();
        Pubsub.publish('TOGGLE_CITY');
    }
};

export default Header;
