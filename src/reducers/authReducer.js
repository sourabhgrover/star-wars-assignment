import { LOGIN } from "../actions/type";

const INTIAL_STATE = {
  isLoggedIn: false
};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};
