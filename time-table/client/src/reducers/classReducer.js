import {
  CLASS_LOADING,
  GET_CLASS,
  CLEAR_CURRENT_CLASS
} from "../actions/types";

const initialState = {
  classes: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLASS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CLASS:
      return {
        ...state,
        classes: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_CLASS:
      return {
        ...state,
        classes: null
      };
    default:
      return state;
  }
}
