var version = '4.0.1';

// let http = 'http://39.107.226.244/';
var http = 'http://bi.shouqiev.com/';
// let http = 'http://172.27.3.68:8080/SQBIServer-web/';



/**
 * Author: zhangfs by Atom
 * Func: 日期格式化原生属性拓展
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,   // 月份
        "d+": this.getDate(),        // 日
        "h+": this.getHours(),       // 小时
        "m+": this.getMinutes(),     // 分
        "s+": this.getSeconds(),     // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3),  // 季度
        "S": this.getMilliseconds()  // 毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


/**
 * Created: zhangfs by Atom
 * Time: 2018/06/04 10:21
 * Func: 设置单时间选择器的周几数据
 * Params: 0个或1个： 偏移的天数，正数表示以后几天，负数表示以前几天
 */
function getWeekOffset(offset) {
    offset = parseInt(offset) || 0;
    var d = new Date().getDay() + offset%7;
    return '周' + '日一二三四五六'.substr(d,1);
}

function getDateOffset(offset) {
    offset = parseInt(offset) || 0;
    var d = new Date();
    d.setDate(d.getDate() + offset);
    return d.format("yyyyMMdd");
}


function updateWeek(dateStr, offset){
    var o = offset || 0;
    var date = str2Date(dateStr);
    var d = date.getDay() + parseInt(o);
    return '周' + '日一二三四五六'.substr(d,1);
};


/**
 * Created: zhangfs by Atom
 * Time: 2018/06/04
 * Func: 字符创转日期格式, 长度不足8位需要补齐以便适配safari
 */
function str2Date(str) {
    str = (str.length == 8) ? (str.slice(0,4)+'/'+str.slice(4,6)+'/'+str.slice(6,8)) : (str.slice(0,4)+'/'+str.slice(4,6)+'/01');
    return new Date(str);
}


/**
 * Created: zhangfs by Atom
 * Time: 2018/06/05
 * Func: url生成
 */
function buildUrl(params) {
    var str = '';
    for(let i in params) {
        str += i + '=' + params[i] + '&';
    }
    str += 'token=' + sessionStorage.token;
    var url = http + 'mobile/' + params.interface + '?' + str;
}
