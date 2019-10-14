import { LOGIN } from "./type";
import starWarApi from "../apis/starWarApi";

export const login = data => {
  return (dispatch, getState) => {
    starWarApi
      .get("/people/1")
      .then(response => {
        console.log(response);
        dispatch({ type: LOGIN });
      })
      .catch(error => console.log(error));
  };
};
