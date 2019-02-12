import * as actionTypes from './actionTypes';
// import axios from 'axios';

export const storeLogin = (user) => {
    return {
        type: actionTypes.STORE_LOGIN,
        user: user,
    }
}

export const storeLogout = () => {
    return {
        type: actionTypes.STORE_LOGOUT
    }
}