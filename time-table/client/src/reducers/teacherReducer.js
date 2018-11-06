import {
  TEACHER_LOADING,
  GET_TEACHER,
  CLEAR_CURRENT_TEACHER
} from "../actions/types";

const initialState = {
  teacher: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEACHER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TEACHER:
      return {
        ...state,
        teacher: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_TEACHER:
      return {
        ...state,
        teacher: null
      };
    default:
      return state;
  }
}
