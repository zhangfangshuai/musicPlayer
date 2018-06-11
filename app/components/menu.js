import React from 'react';
import Pubsub from 'pubsub-js';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MENU_LIST } from '../config/menu_config';
import ListItem from './listitem';
import '../less/menu.less';


class Avatar extends React.Component {

    render() {
        return (
            <div className="user-msg">
                <div className="user-icon"></div>
                <div className="nickname">{this.props.user.nickname}</div>
            </div>
        )
    }
}
Avatar.propTypes = {
    user: PropTypes.object
}


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: MENU_LIST
        };
    }

    hideMenu() {
        Pubsub.publish('HIDE_MENU');
    }

    render() {
        let rightsList = this.state.menuList.filter((item) => {
            return item.right;
        });
        let Items = rightsList.map((item) => {
            return (
                <ListItem key={item.id} data={item} focus={this.props.cItem == item} ></ListItem>
            )
        });
        let MS = this.props.menuState;

        return (
            <div>
                <div className={`menu-mask mask-${MS.toggled ? 'show' : 'hide'}`} onClick={this.hideMenu}></div>
                <div className={`components-menu menu-${MS.toggled ? 'show' : MS.firstIn ? '' : 'hide'}`}>
                    <Avatar user={this.props.user} />
                    <ul>
                        { Items }
                    </ul>
                    <div className="logout"> <Link to="/login">退出登陆</Link> </div>
                </div>
            </div>
        );
    }
};

export default Menu;
