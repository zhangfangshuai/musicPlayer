import React from 'react';
import PubSub from 'pubsub-js';
import '../less/singleDatePicker.less';

class SingleDatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.selfId,
            class: this.props.class,
            offset: -1,
            pickedDate: getDateOffset(-1),
            week: getWeekOffset(-1)
        }
    }

    updateOffset(x) {
        this.setState((prevState) => {
            return {
                offset: prevState.offset + x
            }
        })
    }

    updateDate(type = 'prev') {
        type === 'prev' ? this.updateOffset(-1) : this.state.pickedDate < new Date().format('yyyyMMdd') ? this.updateOffset(1) : '';
        this.setState((prevState) => {
            return {
                pickedDate: getDateOffset(prevState.offset),
                week: getWeekOffset(prevState.offset)
            }
        })
        this.setState((prevState) => {
            this.state.pickedDate != prevState.pickedDate && this.props.handleDate(prevState.pickedDate, "date")
        })
    }


    render() {
        return (
            <div className="singleDatePicker">
                <div className="preDateBtn" onClick={this.updateDate.bind(this, 'prev')}>前一天</div>
                <div className="showDate">
                    <input className="appDateTime" onfocus="this.blur();" value={this.state.pickedDate}/>
                    <span>{this.state.week}</span>
                </div>
                <div className="nextDateBtn" onClick={this.updateDate.bind(this, 'next')}>后一天</div>
            </div>
        )
    }
}

export default SingleDatePicker;
