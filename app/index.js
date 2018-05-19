import React from  'react';
import { render } from 'react-dom';
import { AppContainer } from "react-hot-loader"
import App from './app'

render (
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./app', () => {
        const NewApp = require('./app').default;
        render (
            <AppContainer>
                <NewApp />
            </AppContainer>,
            document.getElementById('app')
        )
    })
}
