import { combineReducers } from "redux";
import nowPLayingReducer from "./nowPlayingReducer";
import upcomingReducer from "./upcomingReducer";
import newsReducer from "./movieNewsReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import movieDetailReducer from "./movieDetailReducer";
import crewsCastsReducer from "./crewsCastsReducer";
import moviewReviewReducer from "./moviewReviewReducer";
import recommendationsMovieReducer from "./recommendationsMovieReducer";

export default combineReducers({
  nowPlaying: nowPLayingReducer,
  upcoming: upcomingReducer,
  news: newsReducer,
  selectedMovie: selectedMovieReducer,
  movieDetail: movieDetailReducer,
  crewsCasts: crewsCastsReducer,
  moviewReview: moviewReviewReducer,
  recommendationsMovie: recommendationsMovieReducer,
  footerBottom: (state = 1, action) => {
    switch (action.type) {
      case "FOOTER_BOTTOM":
        return state + 1;
      default:
        return state;
    }
  },
});
