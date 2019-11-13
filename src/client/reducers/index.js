import { combineReducers } from 'redux';
import productsDetailsReducer from './productsDetailsReducer';
import cartCountDetailsReducer from './cartCountDetails';

export default combineReducers ({
    products : productsDetailsReducer,
    count : cartCountDetailsReducer
})
