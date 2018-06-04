import React from 'react'
import '../less/common.less'
import '../less/watch.less'

class Income extends React.Component {

    render() {
        return (
            <div className="container">
                <section className="section-box">
                    <div className="wrap">
                        <div className="sec-title">营收概况</div>
                        <div class="carType-box">
                            <p class="car-type inc-ct active" data-type='0'>全部</p>
                            <p class="car-type inc-ct" data-type='1'>电车</p>
                            <p class="car-type inc-ct" data-type='2'>燃油车</p>
                        </div>
                        <div class="singleDatePicker">
                            <div class="preDateBtn inc-predate">前一天</div>
                            <div class="showDate">
                                <input type="text" id="appDateTime1" class="appDateTime" onfocus="this.blur();" />
                                <span class="showWeek1"></span>
                            </div>
                            <div class="nextDateBtn inc-nextdate">后一天</div>
                        </div>
                        <div class="headLine">
                            <p>指标名称</p>
                            <p>昨日</p>
                            <p>前日</p>
                            <p>同比</p>
                            <p>同比增幅</p>
                        </div>
                        <ul class="itemVal incVal"></ul>
                        <div class="responsiblePerson-box">
                            <p class="phoneBubble inc-phoneBubble"><a href=""></a></p>
                            <p class="responsiblePerson"></p>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default Income;
