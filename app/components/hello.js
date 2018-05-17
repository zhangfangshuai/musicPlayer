import React from 'react'
// import '../less/hello.less'

// 声明一个React组件  es5使用 createClass, es6使用class
let Hello = React.createClass({
    render() {
        return (
            <div className="hello-component">
                Hello, React and webpack!
            </div>
        );
    }
});

export default Hello;
