export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BACKDROP":
      return !state;
    default:
      return state;
  }
};
