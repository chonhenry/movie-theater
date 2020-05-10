import { combineReducers } from "redux";
import nowPLayingReducer from "./nowPlayingReducer";
import upcomingReducer from "./upcomingReducer";
import newsReducer from "./movieNewsReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import movieDetailReducer from "./movieDetailReducer";

export default combineReducers({
  nowPlaying: nowPLayingReducer,
  upcoming: upcomingReducer,
  news: newsReducer,
  selectedMovie: selectedMovieReducer,
  movieDetail: movieDetailReducer,
});
