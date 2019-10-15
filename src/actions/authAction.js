import { stopSubmit } from "redux-form";

import { LOGIN } from "./type";
import starWarApi from "../apis/starWarApi";
import history from "../utils/history";

export const login = data => {
  return (dispatch, getState) => {
    // Request to search username
    starWarApi
      .get(`/people?search=` + data.username)
      .then(response => {
        // If username found
        if (response.data.count) {
          const people = response.data.results;

          // Check if user entered username and password match
          const userData = people.filter(
            p => p.name === data.username && p.birth_year === data.password
          );

          // If username and password match Dispatch action to Reducer
          if (userData.length) {
            dispatch({ type: LOGIN });
            history.push("/search");
          } else {
            // Dispatch Error to Redux form
            dispatch(
              stopSubmit("Login", { _error: "Incorrect Username or password" })
            );
          }
        } else {
          // Dispatch Error to Redux form
          dispatch(
            stopSubmit("Login", { _error: "Incorrect Username or password" })
          );
        }
      })
      .catch(error => console.log(error));
  };
};
