import React from 'react';
import Pubsub from 'pubsub-js';
import PropTypes from 'prop-types';
import '../less/picker.less';
import { CITY_LIST } from '../config/city_config';
import CityItem from './cityitem';

class Picker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityList: CITY_LIST,
            cityReq: {
                interface: 'getCity'
            }
        };
    }

    componentWillMount() {
        axiosGet(this.state.cityReq, (res) => {
            this.setState({
                cityList: res
            })
        }, false)
    }

    hideCity() {
        Pubsub.publish('HIDE_CITY');
    }

    render() {
        let Items = this.state.cityList.map((item) => {
            return (
                <CityItem key={item.value} data={item} focus={this.props.cItem == item}></CityItem>
            )
        })
        let CS = this.props.cityState;
        return (
            <div>
              <div className={`picker-mask picker-mask-${CS.toggled ? 'show' : 'hide'}`}></div>
              <div className={`component-picker picker-${CS.toggled ? 'show' : CS.firstIn ? '' : 'hide'}`}>
                  <div className="picker-bar">
                      <p onClick={this.hideCity.bind(this)}>取消</p>
                      <p>请选择</p>
                  </div>
                  <ul>
                      { Items  }
                  </ul>
              </div>
            </div>
        )
    }
}

Picker.propTypes = {
    cityState: PropTypes.object
}

export default Picker;
