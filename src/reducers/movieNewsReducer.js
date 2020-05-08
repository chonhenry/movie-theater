export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_News":
      return action.payload;
    default:
      return state;
  }
};
