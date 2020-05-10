export default (state = {}, action) => {
  switch (action.type) {
    case "MOVIE_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
