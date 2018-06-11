import React from 'react';
import '../less/carOption.less';
import PropTypes from 'prop-types';

class CarOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ct: 0
        }
    }

    selectCar(type) {
        this.setState((prevState) => {
            prevState.ct = type
            this.props.handleCar(prevState.ct, 'car');
        })
    }

    render() {
        return (
            <div className="carType-box">
                <p className={`car-type${this.state.ct == 0 ? ' active' : ''}`} onClick={this.selectCar.bind(this, 0)}>全部</p>
                <p className={`car-type${this.state.ct == 1 ? ' active' : ''}`} onClick={this.selectCar.bind(this, 1)}>电车</p>
                <p className={`car-type${this.state.ct == 2 ? ' active' : ''}`} onClick={this.selectCar.bind(this, 2)}>燃油车</p>
            </div>
        )
    }
}

CarOption.propTypes = {
    handleCar: PropTypes.func
}

export default CarOption;
