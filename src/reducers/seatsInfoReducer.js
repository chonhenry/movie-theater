const INTIAL_STATE = {
  seats_qty: 0,
  selectedSeat: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SELECT_SEATS":
      return {
        ...state,
        seats_qty: state.seats_qty + 1,
        selectedSeat: [...state.selectedSeat, action.payload],
      };
    case "UNSELECT_SEATS":
      return {
        ...state,
        seats_qty: state.seats_qty - 1,
        selectedSeat: state.selectedSeat.filter((s) => s != action.payload),
      };
    default:
      return state;
  }
};
