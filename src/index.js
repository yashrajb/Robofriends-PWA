import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {search,request} from "./reducers";
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./container/App";
import 'tachyons';
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

if (process.env.NODE_ENV !== 'production') {
const {whyDidYouUpdate} = require('why-did-you-update');
whyDidYouUpdate(React);
}

const rootReducers = combineReducers({search,request});
const store = createStore(rootReducers,
 +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
applyMiddleware(thunkMiddleware,logger)
);

ReactDOM.render(<Provider store={store}>
<App/>
</Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
