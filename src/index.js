import React from 'react';
import { GlobalStyle } from './style';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>, 
document.getElementById('root'));