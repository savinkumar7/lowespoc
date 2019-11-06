import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/'
import createSagaMiddleware from 'redux-saga'
import baseSaga from '../actions'

export default () =>{
    const sagaMiddleware = createSagaMiddleware();
    const store  = createStore(reducers, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(baseSaga);

    return store;
}