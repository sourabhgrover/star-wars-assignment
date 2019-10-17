import starWarApi from "../apis/starWarApi";
import { ADDPLANETS } from "./type";

export const getPlanet = data => {
  console.log(data);
  return (dispatch, getState) => {
    starWarApi
      .get(`/planets/?search=` + data)
      .then(response => {
        dispatch({ type: ADDPLANETS, payload: response.data });
      })
      .catch(error => console.log(error));
  };
};
