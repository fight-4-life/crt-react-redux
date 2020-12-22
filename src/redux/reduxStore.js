import adsReducer from './adsReducer';

import thunkMiddleware from 'redux-thunk';

const {createStore, combineReducers, applyMiddleware, compose} = require("redux");

let reducers = combineReducers({
    adsPage: adsReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_ = store

export default store