import { combineReducers } from "redux";
import nowPLayingReducer from "./nowPlayingReducer";
import upcomingReducer from "./upcomingReducer";

export default combineReducers({
  nowPlaying: nowPLayingReducer,
  upcoming: upcomingReducer,
});
