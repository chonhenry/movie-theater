//searchMovieReducer

export default (state = {}, action) => {
  switch (action.type) {
    case "Search_Movie":
      return action.payload;
    default:
      return state;
  }
};
