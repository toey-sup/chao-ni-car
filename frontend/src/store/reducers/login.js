import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    user: null //get from /api/current_user
    // user._id  ไว้ใช้ในการยืนยัน
};

const fetchUser = (state, action) => {
    const updatedLogin = { user: action.user || false};
    return updateObject(state, updatedLogin);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER:
            return fetchUser(state, action);
        default:
            return state;
    }
};

export default reducer;