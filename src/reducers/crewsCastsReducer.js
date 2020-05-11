export default (state = {}, action) => {
  switch (action.type) {
    case "Fetch_Crews_Casts":
      return action.payload;
    default:
      return state;
  }
};
