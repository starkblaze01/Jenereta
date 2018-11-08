import axios from "axios";

import {
  GET_CLASS,
  CLASS_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_CLASS
} from "./types";

export const getCurrentClass = () => dispatch => {
  dispatch(setClassLoading());
  axios
    .get("/api/classAndsec")
    .then(res =>
      dispatch({
        type: GET_CLASS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_CLASS,
        payload: {}
      });
    });
};

// Delete Class
export const deleteClass = cls => dispatch => {
  axios
    .delete(`/api/classAndsec/${cls}`)
    .then(res =>
      dispatch({
        type: GET_CLASS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create Class
export const createClass = classData => dispatch => {
  axios
    .post("/api/classAndsec", classData)
    .then(res =>
      dispatch({
        type: GET_CLASS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Class Loading
export const setClassLoading = () => {
  return {
    type: CLASS_LOADING
  };
};

// Clear Class
export const clearCurrentClass = () => {
  return {
    type: CLEAR_CURRENT_CLASS
  };
};
