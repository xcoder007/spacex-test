import { combineReducers } from "redux";
import lauchDataReducer from "./launchDataReducer";

export default combineReducers({
  launch: lauchDataReducer,
});
