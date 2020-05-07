export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_Upcoming_Movie":
      return action.payload;
    default:
      return state;
  }
};
