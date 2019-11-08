import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/'
import ReduxThunk from 'redux-thunk';

export default () =>{

    const store  = createStore(reducers, applyMiddleware(ReduxThunk));
 

    return store;
}