
import {FETCH_FILTERS} from '../actions/filters';

export default (state =[], action) => {

    switch(action.type){

            case FETCH_FILTERS:
                console.log(action.payload.data);
                return action.payload.data;
        default :
            return state;

    }
};