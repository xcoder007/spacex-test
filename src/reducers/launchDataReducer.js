import {
  LAUNCH_DATA_REQUESTED,
  LAUNCH_DATA_REQUEST_FAILURE,
  LAUNCH_DATA_REQUEST_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  data: [],
};
const lauchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAUNCH_DATA_REQUESTED:
      return Object.assign({}, state, {
        endpoint: action.payload,
        error: undefined,
      });
    case LAUNCH_DATA_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        endpoint: undefined,
        data: action.payload,
        error: undefined,
      });
    case LAUNCH_DATA_REQUEST_FAILURE:
      return Object.assign({}, state, {
        endpoint: undefined,
        data: [],
        error: action.payload.errorMessage,
      });
    default:
      return state;
  }
};

export default lauchDataReducer;
