import { ADDPLANETS } from "../actions/type";

const INTIAL_STATE = {};
export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case ADDPLANETS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
