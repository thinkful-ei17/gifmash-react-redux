import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';

import { pickWinner } from './actions';

console.log(store.getState());
console.log(store.dispatch(pickWinner(123)));
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>    
        <App />
    </Provider>
    , document.getElementById('root'));
