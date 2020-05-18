export default (state = [], action) => {
  switch (action.type) {
    case "Fetch_NYT_News":
      return action.payload;
    default:
      return state;
  }
};
