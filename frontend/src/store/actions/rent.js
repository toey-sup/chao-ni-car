import * as actionTypes from "./actionTypes";
import axios from "axios";


// manage card token for payment
export const handleToken = (request) => async dispatch => {
  const res = await axios.post("/api/stripe", request);
  dispatch({ type: actionTypes.FETCH_RENT, request: res.data });
};
