export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_Movie_Review":
      return action.payload;
    default:
      return state;
  }
};
