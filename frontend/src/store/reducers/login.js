import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    auth: false,
    user: null //get from /api/current_user
    // user._id  ไว้ใช้ในการยืนยัน
};

const storeLogin = (state, action) => {
    const updatedLogin = { auth: true, user: action.user };
    return updateObject(state, updatedLogin);
};

const storeLogout = (state) => {
    const updatedLogout = { auth: false, user: null };
    return updateObject(state, updatedLogout);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_LOGIN:
            return storeLogin(state, action);
        case actionTypes.STORE_LOGOUT:
            return storeLogout(state);
        default:
            return state;
    }
};

export default reducer;