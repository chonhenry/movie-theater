export default (state = "", action) => {
  switch (action.type) {
    case "CHANGE_SEARCHTERM":
      return action.payload;
    default:
      return state;
  }
};
