export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_Now_Playing_Movie":
      return action.payload;
    default:
      return state;
  }
};
