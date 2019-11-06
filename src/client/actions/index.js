
import { all, call,  put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_ASYNC = 'FETCH_PRODUCTS_SUCCESS';

export function* fetchProducts() {
  const res = yield call(() => axios.get('http://react-ssr-api.herokuapp.com/users'))
  yield put({ type: FETCH_PRODUCTS_ASYNC, payload: res })
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts)
}

export default function* rootSaga() {
  yield all([
    call(watchFetchProducts),
  ])
}