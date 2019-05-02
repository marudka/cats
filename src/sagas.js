import { call, put, takeLatest } from 'redux-saga/effects';

import catsActions, { CATS_FETCH_REQUESTED } from './actions/cats';

export function* getCats(action) {
    try {
        const response = yield call(fetch, 'https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc');
        const data = yield response.json();
        yield put(catsActions.success(data));
     } catch (e) {
        yield put(catsActions.fail(e));
     }
}

function* getCatsSaga() {
    yield takeLatest(CATS_FETCH_REQUESTED, getCats);
}

export default getCatsSaga;
