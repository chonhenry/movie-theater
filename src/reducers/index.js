import { combineReducers } from "redux";
import nowPLayingReducer from "./nowPlayingReducer";
import upcomingReducer from "./upcomingReducer";
import newsReducer from "./movieNewsReducer";
import selectedMovieReducer from "./selectedMovieReducer";
import movieDetailReducer from "./movieDetailReducer";
import crewsCastsReducer from "./crewsCastsReducer";
import moviewReviewReducer from "./moviewReviewReducer";
import recommendationsMovieReducer from "./recommendationsMovieReducer";
import seatsInfoReducer from "./seatsInfoReducer";
import dateReducer from "./dateReducer";
import timeReducer from "./timeReducer";
import searchMovieReducer from "./searchMovieReducer";
import searchTermReducer from "./searchTermReducer";
import toggleBackdropReducer from "./toggleBackdropReducer";

export default combineReducers({
  nowPlaying: nowPLayingReducer,
  upcoming: upcomingReducer,
  news: newsReducer,
  selectedMovie: selectedMovieReducer,
  movieDetail: movieDetailReducer,
  crewsCasts: crewsCastsReducer,
  moviewReview: moviewReviewReducer,
  recommendationsMovie: recommendationsMovieReducer,
  seatsInfo: seatsInfoReducer,
  date: dateReducer,
  time: timeReducer,
  searchMovie: searchMovieReducer,
  searchTerm: searchTermReducer,
  toggleBackdrop: toggleBackdropReducer,
});
