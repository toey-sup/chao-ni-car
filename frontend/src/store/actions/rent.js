import * as actionTypes from "./actionTypes";
import axios from "axios";

export const storeLogin = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actionTypes.FETCH_USER, user: res.data });
};


// manage card token for payment
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: actionTypes.FETCH_USER, user: res.data });
};
