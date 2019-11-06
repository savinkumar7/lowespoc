import {FETCH_PRODUCTS_ASYNC} from '../actions';

export default (state =[], action) => {

    switch(action.type){

        case FETCH_PRODUCTS_ASYNC:
            return action.payload.data;
        default :
            return state;

    }
};