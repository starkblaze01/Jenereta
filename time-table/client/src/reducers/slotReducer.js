import { SLOT_LOADING, GET_SLOT, CLEAR_CURRENT_SLOT } from "../actions/types";

const initialState = {
  slot: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SLOT_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SLOT:
      return {
        ...state,
        slot: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_SLOT:
      return {
        ...state,
        slot: null
      };
    default:
      return state;
  }
}
