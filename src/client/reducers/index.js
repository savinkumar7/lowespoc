import { combineReducers } from 'redux';
import productsDetailsReducer from './productsDetailsReducer';
import cartCountDetailsReducer from './cartCountDetails';
import filtersDetailsReducer from './filtersDetailsReducer'

export default combineReducers ({
    products : productsDetailsReducer,
    count : cartCountDetailsReducer,
    filters : filtersDetailsReducer

})
