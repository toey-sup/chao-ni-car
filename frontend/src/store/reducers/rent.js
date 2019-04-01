import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    fromDate: null,
    toDate: null,
    duration: null,
    price: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RENT:
            state.fromDate= action.fromDate;
            state.toDate = action.toDate;
            state.duration = action.duration;
            state.price = action.price;
            return state;
        default:
            return state;
    }
};

export default reducer;