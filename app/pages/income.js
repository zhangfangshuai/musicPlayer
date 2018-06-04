import React from 'react';
import '../less/income.less';
import Title from '../components/title';
import CarOption from '../components/carOption';
import SingleDatePicker from '../components/singleDatePicker';
import DutyPerson from '../components/dutyPerson';

class Income extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getInitialState() {
    		return {
    		}
  	}

    render() {
        return (
            <div className="container">
                <section className="section-box">
                    <div className="wrap clearTopGap">
                        <Title name="营收概况" />
                        <CarOption selfClass="inc" />
                        <SingleDatePicker selfId="1" selfClass="inc"/>
                        <div className="scroll-cont">
                            <div className="headLine">
                                <p>指标名称</p>
                                <p>昨日</p>
                                <p>前日</p>
                                <p>同比</p>
                                <p>同比增幅</p>
                            </div>
                            <ul className="itemVal incVal"></ul>
                        </div>
                        <DutyPerson selfClass="inc" />
                    </div>
                </section>

            </div>
        );
    }
}


export default Income;
