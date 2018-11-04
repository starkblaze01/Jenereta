import axios from "axios";

import { GET_TEACHER, TEACHER_LOADING, GET_ERRORS } from "./types";

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

// Profile Loading
export const setTeacherLoading = () => {
  return {
    type: TEACHER_LOADING
  };
};
