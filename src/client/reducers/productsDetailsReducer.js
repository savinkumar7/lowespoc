import {FETCH_PRODUCTS} from '../actions';
import {FETCH_FILTERS} from '../actions';

export default (state =[], action) => {

    switch(action.type){

        case FETCH_PRODUCTS:           
            return  action.payload.data;
            case FETCH_FILTERS:
                return action.payload.data;
        default :
            return state;

    }
};