import axios from "axios";

import {
  GET_TEACHER,
  TEACHER_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_TEACHER
} from "./types";

export const getCurrentTeacher = () => dispatch => {
  dispatch(setTeacherLoading());
  axios
    .get("/api/teachersName")
    .then(res =>
      dispatch({
        type: GET_TEACHER,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_TEACHER,
        payload: {}
      });
    });
};

// Delete Teacher's Name
export const deleteTeacher = tcr => dispatch => {
  axios
    .delete(`/api/teachersName/${tcr}`)
    .then(res =>
      dispatch({
        type: GET_TEACHER,
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

// Create Teacher
export const createTeacher = teacherData => dispatch => {
  axios
    .post("/api/teachersName", teacherData)
    .then(res =>
      dispatch({
        type: GET_TEACHER,
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

// Teacher Loading
export const setTeacherLoading = () => {
  return {
    type: TEACHER_LOADING
  };
};

// Clear Teacher
export const clearCurrentTeacher = () => {
  return {
    type: CLEAR_CURRENT_TEACHER
  };
};
