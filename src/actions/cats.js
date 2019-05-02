export const CATS_FETCH_REQUESTED = 'CATS_FETCH_REQUESTED';
export const CATS_FETCH_SUCCEEDED = 'CATS_FETCH_SUCCEEDED';
export const CATS_FETCH_FAILED = 'CATS_FETCH_FAILED';

const fetch = () => ({
    type: CATS_FETCH_REQUESTED
});

const success = (data) => ({
    payload: data,
    type: CATS_FETCH_SUCCEEDED
});

const fail = (error) => ({
    payload: error,
    type: CATS_FETCH_FAILED
});

export default {
    fetch,
    success,
    fail
}
