import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const storeLogin = (user) => {
    return {
        type: actionTypes.storeLogin,
        user: user,
    }
}

export const storeLogout = () => {
    return {
        type: actionTypes.STORE_LOGOUT
    }
}