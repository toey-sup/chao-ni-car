import * as actionTypes from '../actions/actionTypes';



const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_REQUEST:
            
            return action.payload;
        default:
            return state;
    }
};

export default reducer;