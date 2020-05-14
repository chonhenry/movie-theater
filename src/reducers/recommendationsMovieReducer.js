export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_Recommendations_Movie":
      return action.payload;
    default:
      return state;
  }
};
