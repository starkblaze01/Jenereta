import axios from "axios";

import {
  GET_SLOT,
  SLOT_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_SLOT
} from "./types";

export const getCurrentSlot = () => dispatch => {
  dispatch(setSlotLoading());
  axios
    .get("/api/slots")
    .then(res =>
      dispatch({
        type: GET_SLOT,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_SLOT,
        payload: {}
      });
    });
};

// Delete Lab
export const deleteSlot = id => dispatch => {
  axios
    .delete(`/api/slots/slot/${id}`)
    .then(res =>
      dispatch({
        type: GET_SLOT,
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

// Create numSlot
export const createnumSlot = numSlotData => dispatch => {
  axios
    .post("/api/slots", numSlotData)
    .then(res =>
      dispatch({
        type: GET_SLOT,
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

// Create slot
export const createSlot = slotData => dispatch => {
  axios
    .post("/api/slots/slot", slotData)
    .then(res =>
      dispatch({
        type: GET_SLOT,
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

// Slot Loading
export const setSlotLoading = () => {
  return {
    type: SLOT_LOADING
  };
};

// Clear Slot
export const clearCurrentSlot = () => {
  return {
    type: CLEAR_CURRENT_SLOT
  };
};
