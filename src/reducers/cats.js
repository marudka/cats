import { CATS_FETCH_REQUESTED, CATS_FETCH_SUCCEEDED, CATS_FETCH_FAILED } from './../actions/cats';

const initData = {
    cats: []
};

const cats = (state = initData, action) => {
    switch(action.type) {
        case CATS_FETCH_REQUESTED :
            return {
                ... state,
                status: 'PROGRESS'
            }
        case CATS_FETCH_SUCCEEDED :
            return {
                ... state,
                cats: action.payload,
                status: 'SUCCESS'
            }
        case CATS_FETCH_FAILED :
            return {
                ... state,
                cats: null,
                error: action.payload,
                status: 'ERROR'
            }
        default :
            return state;
    }
}

export default cats;