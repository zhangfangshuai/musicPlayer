// var React = require('react');
import React from  'react'   // es6导入方式
import { render } from 'react-dom';
import Hello from './components/hello'
import "./less/index.less"

// console.log('React version ', React.version);
render {
    <Hello></Hello>,
    document.getElementById('container')
};
