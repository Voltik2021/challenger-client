import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './src/component/App/App';
const node = document.querySelector('#root');

ReactDOM.render(
<BrowserRouter >
    <App/>
</BrowserRouter >, node);
