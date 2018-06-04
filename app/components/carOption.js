import React from 'react';
import '../less/carOption.less';

class CarOption extends React.Component {
    render() {
        return (
            <div className="carType-box">
                <p className={`car-type active ${this.props.whose}`} data-type='0'>全部</p>
                <p className={`car-type ${this.props.whose}`} data-type='1'>电车</p>
                <p className={`car-type ${this.props.whose}`} data-type='2'>燃油车</p>
            </div>
        )
    }
}

export default CarOption;
