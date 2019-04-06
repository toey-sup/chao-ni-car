import * as actionTypes from "./actionTypes";
import axios from "axios";

export const storeLogin = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actionTypes.FETCH_USER, user: res.data });
};

