import axios from "axios";

import {
  GET_SUBJECT,
  SUBJECT_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_SUBJECT
} from "./types";

export const getCurrentSubject = () => dispatch => {
  dispatch(setSubjectLoading());
  axios
    .get("/api/subject")
    .then(res =>
      dispatch({
        type: GET_SUBJECT,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_SUBJECT,
        payload: {}
      });
    });
};

// Delete Subject
export const deleteSubject = sbj => dispatch => {
  axios
    .delete(`/api/subject/${sbj}`)
    .then(res =>
      dispatch({
        type: GET_SUBJECT,
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

// Delete Lab
export const deleteLab = id => dispatch => {
  axios
    .delete(`/api/subject/labs/${id}`)
    .then(res =>
      dispatch({
        type: GET_SUBJECT,
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

// Create Subject
export const createSubject = subjectData => dispatch => {
  axios
    .post("/api/subject", subjectData)
    .then(res =>
      dispatch({
        type: GET_SUBJECT,
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

// Create Lab
export const createLab = labData => dispatch => {
  axios
    .post("/api/subject/labs", labData)
    .then(res =>
      dispatch({
        type: GET_SUBJECT,
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

// Subject Loading
export const setSubjectLoading = () => {
  return {
    type: SUBJECT_LOADING
  };
};

// Clear Subject
export const clearCurrentSubject = () => {
  return {
    type: CLEAR_CURRENT_SUBJECT
  };
};
