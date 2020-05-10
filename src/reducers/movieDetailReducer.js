export default (state = {}, action) => {
  switch (action.type) {
    case "Fetch_Movie_Detail":
      return action.payload;
    default:
      return state;
  }
};
