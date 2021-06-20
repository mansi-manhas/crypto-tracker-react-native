import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';

export default combineReducers({
    crypto: CryptoReducer
});

/*
    Reducers are async by default
    thus, are anonymous functions by default
    all reducers get invoked after an action
*/