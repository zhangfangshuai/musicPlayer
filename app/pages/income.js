import React from 'react';
import Pubsub from 'pubsub-js';
import '../less/income.less';
import Header from '../components/header'
import Title from '../components/title';
import CarOption from '../components/carOption';
import SingleDatePicker from '../components/singleDatePicker';
import DutyPerson from '../components/dutyPerson';


class Income extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            incomeData: [],
            incomeReq : {
                interface: 'getInComeDetail',
                cityId: 1,
                carType: 0,
                dateId: getDateOffset(-1)
            }
        }
    }

    handleIncome(cb, type) {
        this.setState((prevState) => {
            type == "car" ? prevState.incomeReq.carType = cb : prevState.incomeReq.dateId = cb;
            if (isParamValid(prevState.incomeReq, 'income')) {
                axiosGet(prevState.incomeReq, (res) => {
                      prevState.incomeData = res
                      this.setState((prevState) => {
                          prevState.incomeData = res
                      })
                }, false)
            }
        })
    }

    render() {
        axiosGet(this.state.incomeReq, (res) => {
              this.state.incomeData = res;
              this.setState((prevState) => { this.state.incomeData = res });
        }, false)
        if (this.state.incomeData.length != 0) {
            var incomeItems = this.state.incomeData.data.map((item) => {
                return (
                    <li key={this.state.incomeData.data.indexOf(item)}>
                        <p>{item.data0}</p>
                        <p>{item.data1}</p>
                        <p>{item.data2}</p>
                        <p>{item.data3}</p>
                        <p>{item.data4}</p>
                    </li>
                )
            });
        }

        return (
            <div className="container">
                <Header />
                <section className="section-box">
                    <div className="wrap clearTopGap">
                        <Title name="营收概况" />
                        <CarOption handleCar={this.handleIncome.bind(this)} />
                        <SingleDatePicker handleDate={this.handleIncome.bind(this)} />
                        <div className="scroll-cont">
                            <div className="headLine">
                                <p>指标名称</p>
                                <p>昨日</p>
                                <p>前日</p>
                                <p>同比</p>
                                <p>同比增幅</p>
                            </div>
                            <ul> { incomeItems } </ul>
                        </div>
                        <DutyPerson />
                    </div>
                </section>

            </div>
        );
    }
}


export default Income;
