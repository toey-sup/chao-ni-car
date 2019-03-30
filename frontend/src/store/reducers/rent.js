import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userId: null,
    fromDate: null,
    toDate: null,
    carId: null,
    pricePerDay: null,
    duration: null,
    car: null
    //price: null
};

// const fetchUser = (state, action) => {
//     const updatedLogin = { user: action.user || false};
//     return updateObject(state, updatedLogin);
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.FETCH_USER:
//             return fetchUser(state, action);
//         default:
//             return state;
//     }
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INITIAL_DATA:
            state.carId = action.carId;
            state.userId = action.userId;
            state.pricePerDay = action.pricePerDay;
            state.car = action.car; //obj car
            return state;
        case actionTypes.PAY_RENT:
            state.fromDate = action.fromDate;
            state.toDate = action.toDate;
            state.duration = action.duration;
            
            //GET USER ID ด้วยนะ
            return state;
        default:
            return state;
    }
}

export default reducer;