import { combineReducers } from 'redux';
import productsDetailsReducer from './productsDetailsReducer';

export default combineReducers ({
    products : productsDetailsReducer
})
