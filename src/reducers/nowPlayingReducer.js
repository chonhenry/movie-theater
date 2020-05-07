export default (state = [], action) => {
  // if (action.type === "Fetch_Now_Playing_Movie") {
  //   return action.payload;
  // }

  // return state;

  switch (action.type) {
    case "Fetch_Now_Playing_Movie":
      return action.payload;
    default:
      return state;
  }
};
