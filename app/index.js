// var React = require('react');  // es6之前的导入方式
import React from  'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader"
import Root from './root'

// render方法将组件(参数1)挂载到真实的DOM元素(参数2)上
render (
    <AppContainer>
        <Root />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        render (
            <AppContainer>
                <NewRoot />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
