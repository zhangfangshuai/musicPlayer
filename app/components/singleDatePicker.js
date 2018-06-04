import React from 'react';
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

    preDate() {
        this.setState((offset) => ({
            offset: offset-1,
            pickedDate: getDateOffset(offset),
            week: getWeekOffset(offset)
        }))
    }


    render() {
        return (
            <div className="singleDatePicker">
                <div className={`preDateBtn ${this.state.class}-predate`} onClick={this.preDate}>前一天</div>
                <div className="showDate">
                    <input id={`appDateTime${this.state.id}`} className="appDateTime" onfocus="this.blur();" value={this.state.pickedDate}/>
                    <span className={`showWeek${this.state.id}`}>{this.state.week}</span>
                </div>
                <div className={`nextDateBtn ${this.state.class}-nextdate`} onClick={this.nextDate}>后一天</div>
            </div>
        )
    }
}

export default SingleDatePicker;
