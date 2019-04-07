import * as actionTypes from "./actionTypes";
import axios from "axios";

export const storeLogin = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actionTypes.FETCH_USER, user: res.data });
};

// manage card token for payment
export const handleToken = (request) => async dispatch => {
  const res = await axios.post("/api/stripe", request);
  dispatch({ type: actionTypes.FETCH_RENT, request: res.data });
};

// manage requests
export const fetchRequests = () => async dispatch => {
  const res = await axios.get('/api/request');
  dispatch({type: actionTypes.FETCH_REQUEST, payload: res.data})
}

export const completeRequest = (id) => async dispatch => {
  const res = await axios.put('/api/request/complete/' + id);
  dispatch(fetchRequests())
}

export const updateRequest = (id) => async dispatch => {
  const res = await axios.put('/api/request/pickup/' + id);
  dispatch(fetchRequests())
}


export const deleteRequest = (id) => async dispatch => {
  const res = await axios.delete('/api/request/' + id);
  // delete picture
  dispatch(fetchRequests())
}