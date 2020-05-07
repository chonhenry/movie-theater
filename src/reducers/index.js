import { combineReducers } from "redux";
import nowPLayingReducer from "./nowPlayingReducer";

export default combineReducers({
  nowPlayer: nowPLayingReducer,
});
