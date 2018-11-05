import { TEACHER_LOADING, GET_TEACHER } from "../actions/types";

const initialState = {
  profile: null,
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
        loading: false
      };
    default:
      return state;
  }
}
