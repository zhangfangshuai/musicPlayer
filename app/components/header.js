import React from 'react'
import '../less/header.less'

class Header extends React.Component {
    render() {
        return (
            <div className="components-header" onClick={(e) => this.showMenu(e)} >
                <img className="menu-icon" src="/static/images/icon_menu.png" alt="" />
                <img className="logo-icon" src="/static/images/icon_logo.png" alt="" />
                <div className="location">北京</div>
                <img src="/static/images/icon_location.png" alt="" className="location-icon" />
            </div>
        );
    }

    showMenu(e) {
        console.log("menu clicked\n");
    }
};

export default Header;
